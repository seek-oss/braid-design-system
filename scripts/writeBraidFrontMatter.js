#!/usr/bin/env node
/* eslint-disable no-console,no-sync */
const fs = require('fs');
const { prompt } = require('enquirer');

/*
This script augments the generated changeset, adding the additional
front matter block used by Braid to enhance the documentation site
with release information.

Changes made by the script include:
- Add additional front matter block, indicating new/updated apis
- Standardise release note formatting, bolding scopes and conditionally
  adding a example usage block to the provided changeset details

Example diff to generated changeset:
==========================================
   ---
   'braid-design-system': minor
   ---

+  ---
+  updated:
+    - Button
+    - ButtonLink
+  ---

-  Button, ButtonLink: Add `hero` variant
+  **Button, ButtonLink**: Add `hero` variant

+  Provides a `hero` variant to ensure users
+  never miss out on this action.

+  **EXAMPLE USAGE:**
+  ```jsx
+  <Button variant="hero">...</Button>
+  ```
==========================================
*/

(async () => {
  const [changesetPath] = process.argv.slice(2);
  const changesetSrc = fs.readFileSync(changesetPath, 'utf-8');

  if (!changesetPath.includes('.changeset/')) {
    // If changeset path is not in the changeset directory,
    // i.e. when still in temp files, we are not ready to
    // add the braid release front matter.
    //
    // (This happens when the changeset `summary` is empty)
    return;
  }

  // Parse the frontMatter and details from the generated changeset
  const [, changesetsFrontMatter, changesetDetails = ''] = changesetSrc.split(
    /(---\n(?:.|\n)+---\n)/,
  );

  // Prompt for Braid change type, e.g. updated/new
  const changeTypePrompt = await prompt({
    type: 'select',
    message: 'What is the impact to the top level api of Braid?',
    name: 'changeType',
    choices: [
      {
        value: 'updated',
        message: 'Update',
      },
      {
        value: 'new',
        message: 'New',
      },
      {
        value: 'none',
        message: 'No change',
      },
    ],
  }).catch(() => {});

  const braidChangeType = changeTypePrompt?.changeType;
  // Leave changeset alone if exited from prompt or selected `no change`
  if (!braidChangeType || braidChangeType === 'none') {
    return;
  }

  // Regex to extract scopes from changeset details, e.g.
  // `Button, ButtonLink: Add new variant` => `Button, ButtonLink`
  const scopeMatch = changesetDetails.match(
    /(?:\n+)?(?<scope>(?:[\w\-\,\s]+):)\s?\w+/,
  )?.groups?.scope;

  let formattedDetails = changesetDetails;
  let inferredScopes = [];
  if (scopeMatch) {
    // Create array of scopes
    inferredScopes = scopeMatch
      .split(/,\s?/g)
      .map((s) => s.replace(/:\s?$/, '').trim());
    // Format scope as bold in changeset details for consistent
    // release note formatting
    formattedDetails = formattedDetails.replace(
      scopeMatch,
      `**${inferredScopes.join(', ')}:**`,
    );
  }

  let braidChangeScopes = [];
  if (inferredScopes.length > 0) {
    // Ask to use scopes parsed from changeset
    const inferredScopesPrompt = await prompt({
      type: 'toggle',
      enabled: 'Yes',
      disabled: 'No',
      initial: true,
      name: 'confirmed',
      message: `The following scopes were inferred from your changeset:\n${inferredScopes
        .map((s) => `    - ${s}`)
        .join('\n')}\n  Is this correct?`,
    }).catch(() => {});

    // Leave changeset alone if exited from prompt
    if (!inferredScopesPrompt) {
      return;
    }

    if (inferredScopesPrompt.confirmed) {
      // Use scopes inferred from changeset if confirmed
      braidChangeScopes = inferredScopes;
    }
  }

  // If not using scopes inferred from changeset, request explicitly
  if (braidChangeScopes.length === 0) {
    const explicitScopesPrompt = await prompt({
      type: 'list',
      name: 'scopes',
      required: true,
      message: 'List the affected APIs (comma separated)',
      validate(value, state) {
        // Provided scopes list must have items
        if (value.length === 0) {
          return state.styles.danger('Please provide a list of scopes');
        }

        // Provided scopes should not have colons, hyphens or whitespace
        const invalidValues = value.filter((item) => /[:-\s]/.test(item));
        if (invalidValues.length > 0) {
          return state.styles.danger(
            `Invalid scope name${
              invalidValues.length !== 1 ? 's:  \n' : ': '
            }${invalidValues.map((v) => `"${v}"`).join(', ')}`,
          );
        }

        return true;
      },
    }).catch(() => {});

    // Leave changeset alone if exited from prompt
    if (!explicitScopesPrompt) {
      return;
    }

    // Use scopes explicitly provided
    braidChangeScopes = explicitScopesPrompt.scopes;
  }

  // Build the updated changeset contents
  const updatedChangeset = [
    changesetsFrontMatter,
    '---',
    braidChangeType,
    ...braidChangeScopes.map((s) => `  - ${s}`),
    '---',
    formattedDetails,
  ];

  // Prompt for release notes to be added to site
  const releaseNotesPrompt = await prompt({
    type: 'input',
    name: 'releaseNotes',
    message:
      'Please provide a description of the change to be included in the release notes:',
  }).catch(() => {});

  if (releaseNotesPrompt?.releaseNotes) {
    updatedChangeset.push(`${releaseNotesPrompt?.releaseNotes}\n`);
  }

  // Standardise `Example Usage` code block
  const exampleUsagePrompt = await prompt({
    type: 'toggle',
    enabled: 'Yes',
    disabled: 'No',
    initial: true,
    name: 'addExample',
    message: 'Do you want to add an `Example Usage` code block?',
  }).catch(() => {});

  if (exampleUsagePrompt?.addExample) {
    updatedChangeset.push(...['**EXAMPLE USAGE:**', '```jsx', '', '```']);
  }

  fs.writeFileSync(changesetPath, updatedChangeset.join('\n'));

  console.log(
    `\n🚀 Successfully Braid-ified the changeset:\n   ${changesetPath}`,
  );
})();

## Release workflow

[changesets](https://github.com/atlassian/changesets)

### Braid specific frontmatter

Each changeset can pass extra metadata about the release.

e.g.
```
---
'braid-design-system': patch
---

<!-- Optional braid frontmatter -->
---
new:
  - ComponentName
updated:
  - OtherComponent
---


My summary of the change
```

### Submit a PR

Add a changeset as part of a PR if the changes impact the consumer. A changeset is basically a markdown file which also describes the size of the change (patch, minor or major).

```bash
pnpm changeset add
```

A PR could theoretically have multiple changesets describing different changes.
e.g.

- patch: Added new prop to Box
- minor: Add new TextField label type cos we needed more

The [changeset-bot](https://github.com/apps/changeset-bot) will add a reminder on PRs without a changeset to add one. This can be ignored for PRs that don't have consumer facing changes (the minority).

### Github action creates a changeset PR (kind of like renovate)

After merging the PR to master, a new PR is automatically created that contains the result of `pnpm changeset version`.

This:

- Removes existing changeset files
- Creates a changelog file by merging the changesets
- Update the package.json version field

We can then either, keep the PR open and it will self update as more changesets are added to master, or merge it.

[changesets-action](https://github.com/changesets/action)

[Example PR](https://github.com/atlassian/changesets/pull/279)

### Changeset PR is merged

Once the changeset PR is merged, the github action publishes the result to npm and push tags/release notes to github.

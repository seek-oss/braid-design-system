#!/bin/bash

echo "DAYS_OLD: ${DAYS_OLD}"
DATE_FROM_DAYS_AGO=`date --date="${DAYS_OLD} days ago" +"%Y"-"%m"-"%d" || date -v-${DAYS_OLD}d +"%Y"-"%m"-"%d"`;
echo "DATE_FROM_DAYS_AGO: ${DATE_FROM_DAYS_AGO}"
echo "PREVIEW_DIR: ${PREVIEW_DIR}"
echo "Preview dirs:"
echo $(find ${PREVIEW_DIR} -mindepth 1 -maxdepth 1 -type d -print)
echo "Before commit:"
echo $(git log --before=$DATE_FROM_DAYS_AGO | tail -1)

for i in $(find ${PREVIEW_DIR} -mindepth 1 -maxdepth 1 -type d -print); do
  echo "Git log before date:"
  echo $(git log --before=$DATE_FROM_DAYS_AGO $i | tail -1)
  if [[ $(git log --before=$DATE_FROM_DAYS_AGO $i | tail -1) ]]; then
    echo "Deleting directory $i"
    rm -rf $i
  fi
done
if [[ $(git status --porcelain --untracked-files=no | wc -l) -eq 0 ]]; then
  echo "No directories to clean up"
  exit 0
fi
# git config --local user.name 'GitHub Actions'
# git config --local user.email 'actions@github.com'
# git add ${{ env.PREVIEW_DIR }}
# git commit --quiet -m "Clean up old preview directories"
# git push

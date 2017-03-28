# Utility scripts

These scripts are used for managing the release and updates of the theme.

## update-content.sh

This script will update the content from the production (`devopsdays-web`) site to the `exampleSite` directory in the theme. This script should be run from within the `utils` directory, as it will create a `devopsdays-web` temporary directory which has been added to `.gitignore`.

Usage:
```
cd utils
update-content.sh
```

This script requires that local installation of the [hub](https://github.com/github/hub) tool, in order to generate the pull request.

## release-theme.sh

This script will generate a new release of the theme. This script should be run from root of the theme (TODO: make this work better). The script will prompt you for the type of release - Major, Minor, or Patch, and then it will update the changelog as well as create a git tag for the release. You will still need to push when this is complete, by running `git push origin --tags`.

This script requires [hub](https://github.com/github/hub) as well as [github_changelog_generator](https://github.com/skywinder/github-changelog-generator). You should be able to install this via `gem install github_changelog_generator`.

Usage:
```
release-theme.sh
```

## dod-release.sh

This script will update `devopsdays-web` with a specific version of `devopsdays-theme`. Run this script from within the `utils` directory. This script requires that local installation of the [hub](https://github.com/github/hub) tool, in order to generate the pull request.

Usage:
```
dod-release.sh <VERSION>
```

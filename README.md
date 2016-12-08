[![Build status](https://ci.appveyor.com/api/projects/status/2cemxawbx0vtrt8e/branch/master?svg=true)](https://ci.appveyor.com/project/DevOpsDays/devopsdays-theme/branch/master)
[![Build Status](https://travis-ci.org/devopsdays/devopsdays-theme.svg?branch=master)](https://travis-ci.org/devopsdays/devopsdays-theme)
[![GitHub release](https://img.shields.io/github/release/devopsdays/devopsdays-theme.svg)](https://github.com/qubyte/rubidium/releases)
[![license](https://img.shields.io/github/license/devopsdays/devopsdays-theme.svg)]()

[![Stories in Ready](https://badge.waffle.io/devopsdays/devopsdays-theme.svg?label=ready&title=Ready)](http://waffle.io/devopsdays/devopsdays-theme) [![Stories in Progress](https://badge.waffle.io/devopsdays/devopsdays-theme.svg?label=in%progress&title=In%20Progress)](http://waffle.io/devopsdays/devopsdays-theme) [![Needs Review](https://badge.waffle.io/devopsdays/devopsdays-theme.svg?label=needs-review&title=Needs%20Review)](http://waffle.io/devopsdays/devopsdays-theme)

You can see progress on tasks at http://waffle.io/devopsdays/devopsdays-theme

[![Throughput Graph](https://graphs.waffle.io/devopsdays/devopsdays-theme/throughput.svg)](https://waffle.io/devopsdays/devopsdays-theme/metrics)

# devopsdays-theme
devopsdays-theme is a the Hugo theme the [DevOpsDays](https://www.devopsdays.org) website.

# Theme Layout
Bear in mind that theme lives in a separate repo from the main [devopsdays-web repo](https://github.com/devopsdays/devopsdays-web). No changes should be made to the `themes/devopsdays-theme` directory in `devopsdays-web`. If changes need to be made to the theme, they should be made in this repo, and a new version released, and the theme installed into `devopsdays-web`.

# New Features

## Frontpage Logo

On the new homepage, upcoming events are listed with a square thumbnail. If this is not set (the way it is to be set is TBD), then the brain logo is displayed instead.

## Program Page
A new template is being created to generate a program page. A work in progress example can be seen at http://devopsdays-theme.netlify.com/events/2016-chicago/program/

This is an opt-in feature; the page will need to be set for the type of program in order to generate it.

# Developing devopsdays-theme
Working with a Hugo theme outside of a content-based repo has a few challenges. The `devopsdays-theme` repo contains a directory called `exampleSite`, which is what is used for testing theme development. The `config.toml` for the `exampleSite` contains the following value:

```
themesdir = "../.."
```

This tells Hugo where to look for its theme directories. This requires Hugo 0.18 or better. V0.18 of Hugo is scheduled to be released on Dec 19, 2016, but in the meantime, you will need to build the site using the version of Hugo installed in the `bin` directory of `devopsdays-theme`. The binary `bin/hugo` is compiled for Linux, the binary `bin/hugo-osx` is compiled for OS X, and the binary `bin/hugo.exe` is compiled for Windows.


You will need to modify your watch command to use this new binary; use something like this:

```
~/src/devopsdays-theme/bin/hugo-osx server -b="http://localhost:1313" -w
```

## Continuous Integration
The `devopsdays-theme` repo has hooks into Travis, Appveyor and Netlify. Currently, the Travis build doesn’t do very much (the intent is to add some testing using Casper.js for web testing, but no tests have been written. The Appveyor tests ensure that the site can build with Windows.

All changes are built by Netlify to http://devopsdays-theme.netlify.com

# Releasing `devopsdays-theme`

To cut a new release, a tag must be created. This will trigger Travis to deploy a new release. Follow these steps:

1. Make sure you have the [`github_changelog_generator`](https://github.com/skywinder/github-changelog-generator) gem installed on your system
1. Inside the repository, run `github_changelog_generator`.
1. Run `git add CHANGELOG.md`
1. Commit the changed file
1. Add the appropriate tag to the latest commit. The tags are named by the SemVer version number of the theme, withonly numbers (that is, `1.1.31` vs `v1.1.31`)
1. Push to origin master, including tags (if you don't know how to do this, ask!)


# dev examples
This is just a list of some scaffold/POC urls since they aren't easy to get to via nav:
- [Home Page](http://devopsdays-theme.netlify.com/)
- [Event Page](http://devopsdays-theme.netlify.com/events/2016-chicago/welcome/)
- [Talk Page](http://devopsdays-theme.netlify.com/events/2016-chicago/program/adam-jacob/)
- [Program Page](http://devopsdays-theme.netlify.com/events/2016-chicago/program/)

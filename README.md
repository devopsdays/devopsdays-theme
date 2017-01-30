[![Build status](https://ci.appveyor.com/api/projects/status/2cemxawbx0vtrt8e/branch/master?svg=true)](https://ci.appveyor.com/project/DevOpsDays/devopsdays-theme/branch/master)
[![Build Status](https://travis-ci.org/devopsdays/devopsdays-theme.svg?branch=master)](https://travis-ci.org/devopsdays/devopsdays-theme)
[![GitHub release](https://img.shields.io/github/release/devopsdays/devopsdays-theme.svg)](https://github.com/qubyte/rubidium/releases)
[![license](https://img.shields.io/github/license/devopsdays/devopsdays-theme.svg)]()

[![Stories in Ready](https://badge.waffle.io/devopsdays/devopsdays-theme.svg?label=ready&title=Ready)](http://waffle.io/devopsdays/devopsdays-theme) [![Stories in Progress](https://badge.waffle.io/devopsdays/devopsdays-theme.svg?label=in%progress&title=In%20Progress)](http://waffle.io/devopsdays/devopsdays-theme) [![Needs Review](https://badge.waffle.io/devopsdays/devopsdays-theme.svg?label=needs-review&title=Needs%20Review)](http://waffle.io/devopsdays/devopsdays-theme)

You can see progress on tasks at http://waffle.io/devopsdays/devopsdays-theme

[![Throughput Graph](https://graphs.waffle.io/devopsdays/devopsdays-theme/throughput.svg)](https://waffle.io/devopsdays/devopsdays-theme/metrics)

# devopsdays-theme

[![Greenkeeper badge](https://badges.greenkeeper.io/devopsdays/devopsdays-theme.svg)](https://greenkeeper.io/)
devopsdays-theme is the Hugo theme for the [DevOpsDays](https://www.devopsdays.org) website.

# QA Testing the New Theme
While we are in development, your help is appreciated in identifying outstanding issues or defects. Please browse through the example site at https://dev.devopsdays.org, and if you idenfity something that is broken or missing, please [log an issue](https://github.com/devopsdays/devopsdays-theme/issues). We may mark it as a duplicate, etc, but log anything you find that seems wrong or broken.

# Theme Layout
Bear in mind that this theme lives in a separate repo from the main [devopsdays-web repo](https://github.com/devopsdays/devopsdays-web). No changes should be made to the `themes/devopsdays-theme` directory in `devopsdays-web`. If changes need to be made to the theme, they should be made in this repo, and a new version released, and the theme installed into `devopsdays-web`.

# New Features

## Frontpage Logo

On the new homepage, upcoming events are listed with a square thumbnail. If this is not set (the way it is to be set is TBD), then the default logo is displayed instead.

## Program Page
A new template is being created to generate a program page. A work in progress example can be seen at https://dev.devopsdays.org/events/2017-ponyville/program

This is an opt-in feature; the page will need to be set for the type of program in order to generate it.

## Blog
Blog posts now support setting an "author" name in the frontmatter; for example, like this:

```
+++
Title = "Minneapolis 2016 in review"
Date = "2016-08-08T15:59:27-05:00"
Tags = ["2016"]
Author = "Bridget Kromhout"
+++
```

If an author is not specified, attempts to display it are ignored.


# Developing devopsdays-theme
Working with a Hugo theme outside of a content-based repo has a few challenges. The `devopsdays-theme` repo contains a directory called `exampleSite`, which is what is used for testing theme development. The `config.toml` for the `exampleSite` contains the following value:

```
themesdir = "../.."
```

This tells Hugo where to look for its theme directories. This requires Hugo 0.18 or later.

You will need to run your watch command from the `exampleSite` directory; use something like this:

```
hugo server -w --baseUrl="http://localhost:1313"
```

## Contributing
Please submit your proposed changes as a Pull Request against this repository. If the PR will resolve an issue, please add `Fixes #123` to the PR.

## v3 Design
The design and layout can be found in [here](https://drive.google.com/file/d/0BzljU_vIF4BoOHhLV2Yzd2xicEk/view?usp=sharing). Please refer to the [Style Guide](https://github.com/devopsdays/devopsdays-theme/blob/master/STYLE.md) for all colors, fonts, and sizes of text elements, etc.

## Design Principles

### Blocks
All page templates should make use of the `layouts/_default/baseof.html` file. This file contains all wrappers for the content. Anything within the `{{- block "main" . }} {{- end -}}` section is what will be displayed on a sub-template. Include a `{{ define "main" }}` block in your template to include what should be rendered.

### CSS and SCSS
All CSS must be generated with SCSS. The LESS files are located in `static/scss`.

#### `site.scss`
This is the file that imports all the other SCSS files, including Bootstrap, font-awesome (TBD; it seems that BS 4 brings this in for us), and the jquery oembed. It also imports our custom variables and any other customizations.

#### `custom-variables.scss`
Use this to set any SCSS variables, or to over-ride any variables used by Bootstrap.

#### `custom.scss`
This is the only place you should declare custom SCSS or CSS code.

## Continuous Integration
The `devopsdays-theme` repo has hooks into Travis, Appveyor, and Netlify. Currently, the Travis build doesn’t do very much (the intent is to add some testing using Casper.js for web testing, but no tests have been written. The Appveyor tests ensure that the site can build with Windows.

All changes are built by Netlify to https://dev.devopsdays.org

### Asset Pipeline
Peruse the `gulpfile.js` to see what is processed for the asset pipeline. Gulp is only called when changes are merged to master. Pull requests, and local changes will not trigger gulp.

# Releasing `devopsdays-theme`

To cut a new release, a tag must be created. This will trigger Travis to deploy a new release. Follow these steps:

1. Update the `theme_version` key in `theme.toml` to the new version.
1. Add the appropriate tag to the latest commit. The tags are named by the SemVer version number of the theme, with only numbers (that is, `1.1.31` vs `v1.1.31`)
1. Push to `origin master`, including tags (if you don't know how to do this, ask!)

Once the Travis build has succeeded, update the changelog:

1. Make sure you have the [`github_changelog_generator`](https://github.com/skywinder/github-changelog-generator) gem installed on your system
1. Inside the repository, run `github_changelog_generator`.
1. Run `git add CHANGELOG.md`
1. Commit the changed file
1. Push to `origin master`


# dev examples
This is just a list of some scaffold/POC urls since they aren't easy to get to via nav:
- [Home Page](http://devopsdays-theme.netlify.com/)
- [Event Page](http://devopsdays-theme.netlify.com/events/2017-ponyville/welcome/)
- [Talk Page with Single Speaker](http://devopsdays-theme.netlify.com/events/2017-hoofington/program/twilight-sparkle/)
- [Talk Page With Multiple Speakers](http://devopsdays-theme.netlify.com/events/2017-ponyville/program/rainbow-dash/)
- [Speaker Page](http://devopsdays-theme.netlify.com/events/2017-ponyville/speakers/fluttershy/)
- [Program Page](http://devopsdays-theme.netlify.com/events/2017-ponyville/program/)

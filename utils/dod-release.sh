#!/bin/bash

if [ $# -ne 1 ]; then
    echo $0: usage: dod-release.sh version
    exit 1
fi

version=$1
branch=release-theme-version-$version
rm -rf devopsdays-web
git clone git@github.com:devopsdays/devopsdays-web.git
cd devopsdays-web
git checkout -b $branch
wget https://github.com/devopsdays/devopsdays-theme/releases/download/$version/devopsdays-theme-$version.zip
rm -rf themes/devopsdays-theme
unzip devopsdays-theme-$version.zip -d themes/devopsdays-theme
rm devopsdays-theme-$version.zip
git add themes/devopsdays-theme
git commit -m "Releasing theme version $version"
git push origin $branch
hub pull-request -m "Updating theme to $version"

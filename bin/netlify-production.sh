ln -s /opt/build/repo /opt/build/devopsdays-theme
cd exampleSite

../bin/hugo/version
../bin/hugo --theme=devopsdays-theme --buildDrafts=false --baseURL="$URL"
gulp --cwd .

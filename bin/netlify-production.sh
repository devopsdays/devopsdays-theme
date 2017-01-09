ln -s /opt/build/repo /opt/build/devopsdays-theme
cd exampleSite
../bin/hugo version
../bin/hugo -v --theme=devopsdays-theme --buildDrafts=false --baseURL="/"
gulp --cwd .

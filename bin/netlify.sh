pwd
ls
ln -s /opt/build/repo /opt/build/devopsdays-theme
cd ..
ls
cd exampleSite
../bin/hugo version
../bin/hugo -v --theme=devopsdays-theme --buildDrafts=false --baseURL=$URL


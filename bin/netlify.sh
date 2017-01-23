ln -s /opt/build/repo /opt/build/devopsdays-theme
cd exampleSite
hugo_0.18 version
hugo_0.18 -v --theme=devopsdays-theme --buildDrafts=false --baseURL="/"


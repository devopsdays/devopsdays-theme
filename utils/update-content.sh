today=`date '+%Y_%m_%d__%H_%M_%S'`;
branch=update-content-$today
echo "Removing existing devopsdays-web directory..."
rm -rf devopsdays-web
echo "Cloning devopsdays-web..."
git clone https://github.com/devopsdays/devopsdays-web.git
cd ..
git stash
git checkout -b $branch
echo "making new branch"
rsync -rv --update --exclude=.git utils/devopsdays-web/content/ exampleSite/content/
rsync -rv --update --exclude=.git utils/devopsdays-web/static/ exampleSite/static/
rsync -rv --update --exclude=.git utils/devopsdays-web/data/ exampleSite/data/
echo "Completed sync of files"
git add .
git commit -m "Update exampleSite data"
git push origin $branch
hub pull-request -m "Updating exampleSite data"
echo "Success. Please go merge the PR."

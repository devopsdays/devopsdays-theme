require 'github_changelog_generator/task'


after_deploy:
  cd $HOME
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis"
  GitHubChangelogGenerator::RakeTask.new :changelog do |config|
    config.user = 'devopsdays'
    config.project = 'devopsdays-theme'
  end

#add, commit and push new Changelog
git add -f .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed updated CHANGELOG"
git push -fq origin gh-pages > /dev/null

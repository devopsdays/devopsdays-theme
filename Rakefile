require 'github_changelog_generator/task'


task :after_deploy do
  cd $HOME
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis"
  github_changelog_generator

  #add, commit and push new Changelog
  git add -f .
  git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed updated CHANGELOG"
  git push -fq origin gh-pages > /dev/null
end

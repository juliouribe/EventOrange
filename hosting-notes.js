/*
Hosting Mini Lecture

When running locally, we run both a frontend and backend server. Frontend is at
localhost 3000 and backend is at 5000. We only need a server for frontend locally
because we are having a live development server to update with our changes. In
production we don't need a frontend server, just a static html page.

Need to add linux to Gemfile.lock
bundle lock --add-platform x86_64-linux

Make sure public folder is in .gitignore

Create a package.json at root
npm init -y

In database.yml, remove most lines and pass in url: erb code to DATABASE_URL

Production builds should not have the following
- byebug/debugger breakpoints
- console logs
- logger

Hosting on Heroku
1. Create new app
2. Consider installing heroku CLI tools: https://devcenter.heroku.com/articles/heroku-cli
3. When you enter an app name, it will check and enforce a unique app name
4. In Settings,
  In config vars, do the usual keys
    RAILS_MASTER_KEY: 'master.key'
  Buildpacks
    Add nodejs then ruby. The order matters.
5. Back to deploy, use either Github or Heroku CLI
  Github: just pass in the name of your repo
6. get rid of dev dependencies
7. Create a proc file at root, 'Procfile'
web: rails server -p $PORT -e $RAILS_ENV
console: rails console
release: rails db:migrate && rails db:seed
*/


/*
Feature Branching Mini lecture

Main branch should always be functional. New code should be worked on on a separate
branch. Once that is good you can merge to main.

1. Create a new branch and switch
git checkout -b add-signup-form

2. Commit changes to new branch.

3. Push your new branch to remote
The first time you push the branch. Every other time git push is good.
git push --set-upstream origin add-signup-form

4. In the github UI, click on the Pull Request tab and create a new pull request.
You get to choose which branch and compare against main.

5. You can assign reviewers and describe your PR.

6. Then you get an option to merge the pull request. You can delete the branch if you want

If your branch gets behind main, it gets sticky. Maybe a git rebase -i main might
fix it.

Protect main

settings > branches > main (name pattern)
click on Lock Branch. This will prevent users from pushing to main.
*/

/*
AWS Mini Lecture

*/

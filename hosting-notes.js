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

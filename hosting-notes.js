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


*/

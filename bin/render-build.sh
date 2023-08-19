#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install
rails db:drop
rails db:create
rails db:migrate
rails db:seed #if needed. Remove this when you are super production ready to avoid dropping tables and user accounts.

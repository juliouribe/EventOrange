Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:show, :create, :destroy]
  end

  get '*path',
    to: 'static_pages#frontend',
    # Only forward for non ajax requests and is an html request.
    constraints: lambda { |req| !req.xhr? && req.format.html? }

  # Front end routes
  root to: 'static_pages#frontend'
end

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    match '/purchased_events', to: '/api/users#purchased_events', via: [:get]
    match '/liked_events', to: '/api/users#liked_events', via: [:get]
    match '/hosted_events', to: '/api/users#hosted_events', via: [:get]
    resources :events, only: [:index, :show, :create, :update, :destroy]
    resources :tickets, only: [:index, :show, :create, :update, :destroy]
    resources :likes, only: [:index, :show, :create, :destroy]
    resource :session, only: [:show, :create, :destroy]
  end

  get '*path',
    to: 'static_pages#frontend',
    # Only forward for non ajax requests and is an html request.
    constraints: lambda { |req| !req.xhr? && req.format.html? }

  # Front end routes
  root to: 'static_pages#frontend'
end

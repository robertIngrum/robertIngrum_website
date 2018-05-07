Rails.application.routes.draw do
  root 'home#show'

  resources :articles do
    resources :comments
  end

  resource 'home', controller: 'home', only: %i[show]
end

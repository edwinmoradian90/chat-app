Rails.application.routes.draw do
  devise_for :users
  resources :messages, only: %i[new create]
  root 'landing#index'
end

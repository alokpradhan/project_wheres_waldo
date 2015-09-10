Rails.application.routes.draw do

  root 'photos#index'

  resources :tags
  resources :users

end

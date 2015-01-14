Rails.application.routes.draw do
  resources :bible
  resources :readers do
    post 'add_verse', on: :member
    post 'remove_verse', on: :member
  end
end
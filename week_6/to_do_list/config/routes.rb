Rails.application.routes.draw do
  
  root to: 'todos#index'

  get '/todo/new', to: 'todos#create'
end

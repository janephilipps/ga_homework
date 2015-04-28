Rails.application.routes.draw do
  
  root to: 'todos#index'

  post '/todos', to: 'todos#create'

  get '/authors', to: 'authors#index'

  post '/authors', to: 'authors#create'
end

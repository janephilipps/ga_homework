Rails.application.routes.draw do
  
  root to: 'todos#index'

  post '/todos', to: 'todos#create'
end

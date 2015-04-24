Rails.application.routes.draw do
  
  root to: 'calculator#index'

  get '/add/:x/:y', to: 'calculator#add'

  get '/subtract/:x/:y', to: 'calculator#subtract'

  get '/multiply/:x/:y', to: 'calculator#multiply'

  get '/divide/:x/:y', to: 'calculator#divide'

  end

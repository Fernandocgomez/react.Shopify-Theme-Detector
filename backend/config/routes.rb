Rails.application.routes.draw do
  resources :urls

  post '/get_theme_name', to: 'urls#get_theme_name'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

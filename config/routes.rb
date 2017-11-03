Rails.application.routes.draw do

  get 'resumes/index'

  get 'resumes/new'

  get 'resumes/create'

  get 'resumes/destroy'

  get 'welcome/the_experience'

  get 'welcome/menu'

  get 'welcome/join_the_team'

  get 'welcome/index'

  root 'welcome#index'

  # match '/contacts',     to: 'contacts#new',             via: 'get'
  resources "contacts", only: [:new, :create]

  resources :resumes, only: [:index, :new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

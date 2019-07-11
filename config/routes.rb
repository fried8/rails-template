Rails.application.routes.draw do
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/", action: :index, controller: "home"
  get "/blog-overview", action: :index, controller: "home"
  get "/user-profile-lite", action: :index, controller: "home"
  get "/add-new-post", action: :index, controller: "home"
  get "/errors", action: :index, controller: "home"
  get "/components-overview", action: :index, controller: "home"
  get "/tables", action: :index, controller: "home"
  get "/blog-posts", action: :index, controller: "home"
end

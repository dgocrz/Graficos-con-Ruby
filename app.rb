


require 'sinatra'
require 'json'

set :public_folder, 'public' # para archivos JS/CSS

set :bind, '0.0.0.0'

set :port , ENV.fetch('PORT',4567)

# Ruta principal
get '/' do
  erb :index
end

# Ruta que devuelve datos (simulados)
get '/data' do
  content_type :json
  {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    values: [10, 20, 40, 50, 20]
  }.to_json
end
class AuthorsController < ApplicationController

  # Fixes authenticity token error for Active Record
  protect_from_forgery with: :null_session

end
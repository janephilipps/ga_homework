class TodosController < ApplicationController

	# Fixes authenticity token error for Active Record
	protect_from_forgery with: :null_session

	def index
		@todos = Todo.all
		render :index
	end

	def create
		todo = params[:todo].permit(:description)
		Todo.create(todo)
		redirect_to "/"
	end
end
class TodosController < ApplicationController
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
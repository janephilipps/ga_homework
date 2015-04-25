class TodosController < ApplicationController
	def index
		render text: "To-dos!"
	end

	def create
		render text: "Create to-do!"
	end
end
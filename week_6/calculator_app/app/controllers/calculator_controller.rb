class CalculatorController < ApplicationController
	def index

	end

	def add
		x = params[:x].to_i
		y = params[:y].to_i
		@sum = x + y
	end

	def subtract
		x = params[:x].to_i
		y = params[:y].to_i
		@diff = x - y
	end

	def multiply
		x = params[:x].to_i
		y = params[:y].to_i
		@product = x * y
	end

	def divide
		x = params[:x].to_i
		y = params[:y].to_i
		@quotient = x / y
	end
end
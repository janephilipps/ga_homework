class AddAuthorIdToTodo < ActiveRecord::Migration
  def change
    change_table :todos do |t|
      t.belongs_to :author
    end
  end
end

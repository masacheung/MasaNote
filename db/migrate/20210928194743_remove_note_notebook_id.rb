class RemoveNoteNotebookId < ActiveRecord::Migration[5.2]
  def change
    change_column_null :notes, :notebook_id, true
    change_column_null :notes, :user_id, true
  end
end

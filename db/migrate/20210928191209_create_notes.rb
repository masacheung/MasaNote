class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :body
      t.integer :user_id, null: false
      t.integer :notebook_id, null: false

      t.timestamps
    end

    add_index :notes, :user_id
    add_index :notes, :notebook_id
  end
end

class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :positionX, null: false
      t.integer :positionY, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end

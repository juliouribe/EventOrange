class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.integer :price, null: false, default: 0
      t.references :user, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true
      t.timestamps
    end

    add_index :tickets, [:user_id, :event_id], unique: true
  end
end

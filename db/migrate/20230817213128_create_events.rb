class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.references :host, null: false, foreign_key: { to_table: :users}
      t.integer :capacity, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time
      t.timestamps
    end

    add_index :events, :title, unique: true
  end
end

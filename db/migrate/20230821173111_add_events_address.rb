class AddEventsAddress < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :address, :string, null: false
  end
end

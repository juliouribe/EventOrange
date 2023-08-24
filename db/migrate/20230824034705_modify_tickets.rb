class ModifyTickets < ActiveRecord::Migration[7.0]
  def change
    add_column :tickets, :quantity, :integer, null: false, default: 1
  end
end

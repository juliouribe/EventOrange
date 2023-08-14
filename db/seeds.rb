# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Destroy Tables
User.destroy_all
puts "Table instances destroyed"

# Reset pk sequence
ActiveRecord::Base.connection.reset_pk_sequence!('users')
puts "Primary key sequence reset"

# Sample data
puts "Creating Users"
ike = User.create!(
  email: "dwighteisenhower@ike.com",
  password: "ilikeike"
)

10.times do
  User.create!({
    email: Faker::Internet.unique.email,
    password: 'password'
  })
end
puts "Finished creating Users"

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
# This is the demo user.
ike = User.create!(
  email: "eisenhower@ike.com",
  password: "ilikeike",
  first_name: "Dwight",
  last_name: "Eisenhower"
)

# 10.times do
#   User.create!({
#     email: Faker::Internet.unique.email,
#     password: 'password'
#   })
# end
puts "Finished creating Users"

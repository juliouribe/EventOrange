# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

# Destroy Tables
User.destroy_all
Event.destroy_all
puts "Table instances destroyed"

# Reset pk sequence
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('events')
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
puts "Finished creating Users"

puts "Creating Events"
unleashed_on_a_leash = Event.create!(
  title: 'Cats Unleashed on a Leash',
  body: 'Your little guy wants to go outside too! Put a vest on your cat and liberate them! Put a leash on your feline and let them unleash!',
  host_id: 1,
  location: 'Mountain Lake Park',
  capacity: 100,
  start_time: '2023-09-01T11:00:00',
  end_time: '2023-09-01T11:34:01',
)
# io link is link from amazon bucket. Filename keep same extension

cat_leash = URI.parse("https://event-orange-seeds.s3.us-west-1.amazonaws.com/cat_leash.jpeg").open
unleashed_on_a_leash.photo.attach(
  io: cat_leash,
  filename: "cat_leash.jpeg"
)
puts "Finished creating Events"


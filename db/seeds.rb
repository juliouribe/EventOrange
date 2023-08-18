# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

# Destroy Tables
User.destroy_all
Event.destroy_all
puts "Table instances destroyed"

# Reset pk sequence
ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("events")
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
# Cats park
unleashed_on_a_leash = Event.create!(
  title: "Cats Unleashed on a Leash",
  body: "Your little guy wants to go outside too! Put a vest on your cat and liberate them! Put a leash on your feline and let them unleash!",
  host_id: 1,
  location: "Mountain Lake Park",
  capacity: 100,
  start_time: "2023-09-01T11:00:00",
  end_time: "2023-09-01T14:00:00",
)
# io link is link from amazon bucket. Filename keep same extension
cat_leash = URI.parse("https://event-orange-seeds.s3.us-west-1.amazonaws.com/cat_leash.jpeg").open
unleashed_on_a_leash.photo.attach(
  io: cat_leash,
  filename: "cat_leash.jpeg"
)

# Mimosas Park
mimosas_park = Event.create!(
  title: "Sunday Mimosas at the Park",
  body: "This Sunday we'll be hosting mimosas at the park. We have plenty of orange juice but you'll need to bring your own champagne. This event is B.Y.O.C. Tell your friends and meet us at Dolores park for fun in the sun.",
  host_id: 1,
  location: "Dolores Park",
  capacity: 30,
  start_time: "2023-09-09T10:00:00",
  end_time: "2023-09-09T16:00:00",
)
mimosas = URI.parse("https://event-orange-seeds.s3.us-west-1.amazonaws.com/mimosas.jpeg").open
mimosas_park.photo.attach(
  io: mimosas,
  filename: "mimosas.jpeg"
)

# Paint and Sip
paint_sip = Event.create!(
  title: "Paint and Sip",
  body: "Grab your pals and come paint and drink with us!",
  host_id: 1,
  location: "Convivum Enoteca",
  capacity: 30,
  start_time: "2023-09-15T18:00:00",
  end_time: "2023-09-15T21:00:00",
)
paint_sip_image = URI.parse("https://event-orange-seeds.s3.us-west-1.amazonaws.com/paint_sip.jpeg").open
paint_sip.photo.attach(
  io: paint_sip_image,
  filename: "paint_sip.jpg"
)

# Formula 1 Watch party
f1_watch = Event.create!(
  title: "Formula 1 Watch Party",
  body: "Come down to the Kezar Pub to watch a replay of the Italian Grand Prix. Replay starts at 9am. Breakfast will be served. Event is all ages. Link to meetup group: meetup.com/f1fansSF",
  host_id: 1,
  location: "The Kezar Pub",
  capacity: 100,
  start_time: "2023-09-25T09:00:00",
  end_time: "2023-09-25T13:00:00",
)
f1_watch_image = URI.parse("https://event-orange-seeds.s3.us-west-1.amazonaws.com/f1_watch_party.jpeg").open
f1_watch.photo.attach(
  io: f1_watch_image,
  filename: "f1_watch_party.jpeg"
)

# Empress Dance Party
lmp_party = Event.create!(
  title: "L'imperatrice Dance Party",
  body: "Bring your weirdest dance moves out tonight and dance the night away! Its the music of the future. L'imperatrice is an artist from France. They have done collaborations with Parcels and covers of Daft Punk. If you like to dance, you'll like L'imperatrice",
  host_id: 1,
  location: "The Independent",
  capacity: 400,
  start_time: "2023-09-25T09:00:00",
  end_time: "2023-09-25T13:00:00",
)
lmp_party_image = URI.parse("https://event-orange-seeds.s3.us-west-1.amazonaws.com/lmp_party.webp").open
lmp_party.photo.attach(
  io: lmp_party_image,
  filename: "lmp_party.jpeg"
)

# Tech Disrupt
disrupt = Event.create!(
  title: "TechCrunch Disrupt",
  body: "Disrupt — the original startup conference — stays fresh, relevant and focused on founders, investors, and the future of tech year after year. Whether you’re a startup rookie learning the ropes, a seasoned investor searching for the next big thing, or a founder hell-bent on changing the world - Disrupt delivers the tools, knowledge, and connections to help you make it happen.",
  host_id: 1,
  location: "Moscone Event Center",
  capacity: 1000,
  start_time: "2023-09-19T09:00:00",
  end_time: "2023-09-21T18:00:00",
)
disrupt_image = URI.parse("https://event-orange-seeds.s3.us-west-1.amazonaws.com/tc_disrupt.jpeg").open
disrupt.photo.attach(
  io: disrupt_image,
  filename: "disrupt.jpg"
)

puts "Finished creating Events"


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
Ticket.destroy_all
Like.destroy_all
puts "Table instances destroyed"

# Reset pk sequence
ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("events")
ActiveRecord::Base.connection.reset_pk_sequence!("tickets")
ActiveRecord::Base.connection.reset_pk_sequence!("likes")

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
julio = User.create!(
  email: "uribejulioc@gmail.com",
  password: "juliofoolio",
  first_name: "Julio",
  last_name: "Uribe"
)
keren = User.create!(
  email: "keren@aol.com",
  password: "keren123",
  first_name: "Keren",
  last_name: "Zendejas"
)
independent = User.create!(
  email: "independent@events.com",
  password: "theindependent",
  first_name: "The",
  last_name: "Independent"
)
f1_meetup = User.create!(
  email: "f1group@meetup.com",
  password: "kezarbar",
  first_name: "Forumla 1",
  last_name: "Meetup"
)
tc = User.create!(
  email: "disrupt@tc.com",
  password: "disrupt!!!",
  first_name: "Tech",
  last_name: "Crunch"
)
charles = User.create!(
  email: "charles@gmail.com",
  password: "charles123",
  first_name: "Charles",
  last_name: "Leclerc"
)
lewis = User.create!(
  email: "lewis@gmail.com",
  password: "lewis123",
  first_name: "Lewis",
  last_name: "Hamilton"
)
castro = User.create!(
  email: "castrotheater@gmail.com",
  password: "castro123",
  first_name: "Castro",
  last_name: "Theater"
)

puts "Finished creating Users"

puts "Creating Events"
# Cats park
unleashed_on_a_leash = Event.create!(
  title: "Cats Unleashed on a Leash",
  body: "Your little guy wants to go outside too! Put a vest on your cat and liberate them! Put a leash on your feline and let them unleash!",
  host_id: keren.id,
  location: "Mountain Lake Park",
  address: "98 Funston Ave, San Francisco, CA 94118",
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
  host_id: julio.id,
  location: "Dolores Park",
  address: "19th St &, Dolores St, San Francisco, CA 94114",
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
  host_id: ike.id,
  location: "Convivum Enoteca",
  address: "516 Green St, San Francisco, CA 94133",
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
  host_id: f1_meetup.id,
  location: "The Kezar Pub",
  address: "770 Stanyan St, San Francisco, CA 94117",
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
  host_id: independent.id,
  location: "The Independent",
  address: "628 Divisadero St, San Francisco, CA 94117",
  capacity: 400,
  start_time: "2023-09-15T18:00:00",
  end_time: "2023-09-15T23:00:00",
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
  host_id: tc.id,
  location: "Moscone Event Center",
  address: "747 Howard St, San Francisco, CA 94103",
  capacity: 1000,
  start_time: "2023-09-19T09:00:00",
  end_time: "2023-09-21T18:00:00",
)
disrupt_image = URI.parse("https://event-orange-seeds.s3.us-west-1.amazonaws.com/tc_disrupt.jpeg").open
disrupt.photo.attach(
  io: disrupt_image,
  filename: "disrupt.jpg"
)

ocean_beach = Event.create!(
  title: "Ocean Beach Cleanup",
  body: "Come help us clean up Ocean Beach. We'll be meeting at the Beach Chalet at 9am. We'll provide the bags and gloves. You bring the good vibes.",
  host_id: keren.id,
  location: "Ocean Beach",
  address: "1000 Great Hwy, San Francisco, CA 94121",
  capacity: 100,
  start_time: "2023-10-05T09:00:00",
)
ocean_beach_image = URI.parse("https://www.signupgenius.com/cms/socialMediaImages/beach-clean-up-tips-ideas-facebook-1200x630.png").open
ocean_beach.photo.attach(
  io: ocean_beach_image,
  filename: "ocean_beach.png"
)
bar_crawl = Event.create!(
  title: "North Beach/Chinatown Bar Crawl",
  body: "Come join us for a bar crawl in North Beach and Chinatown. We'll be meeting at the Columbus Cafe at 8pm. We'll be hitting up the best bars in North Beach and Chinatown. We'll be ending the night at Li Po Cocktail Lounge.",
  host_id: lewis.id,
  location: "Columbus Cafe",
  address: "562 Green St, San Francisco, CA 94133",
  capacity: 50,
  start_time: "2023-09-21T20:00:00",
)
bar_crawl_image = URI.parse("https://flamingotoursandtrips.com/wp-content/uploads/2021/06/What-is-a-pub-crawl-or-a-bar-crawl.jpg").open
bar_crawl.photo.attach(
  io: bar_crawl_image,
  filename: "bar_crawl.jpg"
)

book_club = Event.create!(
  title: "Monthly Book Club at the Green Apple",
  body: "Come join us for our monthly book club. This month we'll be reading The Alchemist by Paulo Coelho. We'll be meeting at the Green Apple Bookstore at 7pm. We'll be discussing the book and having a few drinks. Hope to see you there!",
  host_id: charles.id,
  location: "Green Apple Books",
  address: "506 Clement St, San Francisco, CA 94118",
  capacity: 30,
  start_time: "2023-09-11T19:00:00",
)
book_club_image = URI.parse("https://cdn1.bookmanager.com/i/9911545/cover__800____300_px_.png").open
book_club.photo.attach(
  io: book_club_image,
  filename: "book_club.png"
)

baker_beach = Event.create!(
  title: "Hike to Baker Beach",
  body: "Come join us for a hike to Baker Beach. We'll be meeting at the Presidio Visitor Center at 10am. We'll be hiking through the Presidio and ending at Baker Beach. We'll be having a picnic at Baker Beach. Bring your own food and drinks.",
  host_id: ike.id,
  location: "Presidio Visitor Center",
  address: "210 Lincoln Blvd, San Francisco, CA 94129",
  capacity: 50,
  start_time: "2023-09-25T10:00:00",
)
baker_beach_image = URI.parse("https://www.sftourismtips.com/images/baker-beach-san-francisco-with-golden-gate-bridge.jpg").open
baker_beach.photo.attach(
  io: baker_beach_image,
  filename: "baker_beach.jpg"
)

ceramics = Event.create!(
  title: "Intro to Ceramics Class",
  body: "Come join us for an intro to ceramics class. We'll be meeting at the Ceramics Studio at 6pm. We'll be learning the basics of ceramics and making our own pieces. We'll be providing the clay and tools. You'll be able to take your pieces home with you.",
  host_id: keren.id,
  location: "The Castro Theater",
  address: "429 Castro St, San Francisco, CA 94114",
  capacity: 20,
  start_time: "2023-09-27T18:00:00",
)
ceramics_image = URI.parse("https://media.vanityfair.com/photos/55a3cb87fff2c16856a6a255/16:9/w_1280,c_limit/ghost-patrick-swayze-pottery-scene.jpg").open
ceramics.photo.attach(
  io: ceramics_image,
  filename: "ceramics.jpg"
)

alamo_square_movie = Event.create!(
  title: "Movies in the Park at Alamo Square",
  body: "Come join us for a movie in the park. We'll be meeting at Alamo Square at 7pm. We'll be watching The Princess Bride. Bring your own food and drinks. We'll be providing the popcorn.",
  host_id: castro.id,
  location: "Alamo Square",
  address: "Steiner St &, Hayes St, San Francisco, CA 94117",
  capacity: 100,
  start_time: "2023-09-29T19:00:00",
)
alamo_square_movie_image = URI.parse("https://cdn.funcheap.com/wp-content/uploads/2019/07/7.26.18_Sundown-Cinema-70-ZJD-180726-1.jpg").open
alamo_square_movie.photo.attach(
  io: alamo_square_movie_image,
  filename: "alamo_square_movie.jpg"
)

space_odyssey = Event.create!(
  title: "2001: A Space Odyssey at the Castro Theater",
  body: "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins: a spacecraft manned by two men and the supercomputer HAL 9000. Stanley Kubrick's masterpiece traces an expedition to the moon, Jupiter and beyond, and imagines the future evolution of humanity.",
  host_id: castro.id,
  location: "The Castro Theater",
  address: "429 Castro St, San Francisco, CA 94114",
  capacity: 500,
  start_time: "2023-10-21T19:00:00",
)
space_odyssey_image = URI.parse("https://savethecat.com/wp-content/uploads/2018/10/1.jpg").open
space_odyssey.photo.attach(
  io: space_odyssey_image,
  filename: "2001_space_odyssey.jpg"
)

blade_runner = Event.create!(
  title: "Blade Runner and Brazil double feature at the Castro Theater",
  body: "Blade Runner: The Final Cut 7:00 pm Harrison Ford is Rick Deckard, an ex-cop forced out of retirement to hunt four renegade android slaves on the acid rain swept streets of dystopian Los Angeles, 2019. See Ridley Scott’s groundbreaking sci-fi noir classic where it belongs: on the Castro’s ultra-wide screen! Rutger Hauer, Sean Young, Daryl Hannah, William Sanderson, Edward James Olmos and the music of Vangelis co-star. (1982/2007, 117 min, DCP ‘Scope)",
  host_id: castro.id,
  location: "The Castro Theater",
  address: "429 Castro St, San Francisco, CA 94114",
  capacity: 500,
  start_time: "2023-11-01T19:00:00",
  end_time: "2023-11-01T22:00:00",
)

blade_runner_image = URI.parse("https://helios-i.mashable.com/imagery/articles/03fu62l03INV4Ec7oc5GJGm/hero-image.fill.size_1248x702.v1623366102.jpg").open
blade_runner.photo.attach(
  io: blade_runner_image,
  filename: "blade_runner.jpg"
)

mulholland_drive = Event.create!(
  title: "Mulholland Drive at the Castro Theater",
  body: "Blonde Betty Elms (Naomi Watts) has only just arrived in Hollywood to become a movie star when she meets an enigmatic brunette with amnesia (Laura Harring). Meanwhile, as the two set off to solve the second woman’s identity, ?lmmaker Adam Kesher (Justin Theroux) runs into ominous trouble while casting his latest project. David Lynch’s seductive and scary vision of Los Angeles’s dream factory is one of the true masterpieces of the new millennium, a tale of love, jealousy, and revenge like no other. (2001, 146 min, 35mm)",
  host_id: castro.id,
  location: "The Castro Theater",
  address: "429 Castro St, San Francisco, CA 94114",
  capacity: 500,
  start_time: "2023-09-21T19:00:00",
  end_time: "2023-12-21T22:00:00",
)

mulholland_drive_image = URI.parse("https://www.siff.net/images/CINEMA/2023/Dreams%20%26%20Nightmares%20-%20David%20Lynch/CIN_MulhollandDrive_1600x900-a_57516.jpeg").open
mulholland_drive.photo.attach(
  io: mulholland_drive_image,
  filename: "mulholland_drive.jpeg"
)

the_strokes = Event.create!(
  title: "The Strokes at the Independent",
  body: "The Strokes are an American rock band from Manhattan, New York. Formed in 1998, the band is composed of singer Julian Casablancas, guitarists Nick Valensi and Albert Hammond Jr., bassist Nikolai Fraiture, and drummer Fabrizio Moretti. Following the conclusion of five-album deals with RCA and Rough Trade, the band has continued to release new music through Casablancas' Cult Records.",
  host_id: independent.id,
  location: "The Independent",
  address: "628 Divisadero St, San Francisco, CA 94117",
  capacity: 400,
  start_time: "2023-09-21T19:00:00",
)

the_strokes_image = URI.parse("https://s1.ticketm.net/dam/a/84e/4d1720db-9677-413c-b844-2cd22f1f484e_1313551_TABLET_LANDSCAPE_LARGE_16_9.jpg").open
the_strokes.photo.attach(
  io: the_strokes_image,
  filename: "the_strokes.jpg"
)

arctic_monkeys = Event.create!(
  title: "Arctic Monkeys at the Independent",
  body: "Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner, Jamie Cook, Nick O'Malley, and Matt Helders. Former band member Andy Nicholson left the band in 2006 shortly after their debut album was released.",
  host_id: independent.id,
  location: "The Independent",
  address: "628 Divisadero St, San Francisco, CA 94117",
  capacity: 400,
  start_time: "2023-10-21T19:00:00",
)

arctic_monkeys_image = URI.parse("https://substreammagazine.com/wp-content/uploads/2022/08/Arctic-Monkeys-2022-1280x640.jpg").open
arctic_monkeys.photo.attach(
  io: arctic_monkeys_image,
  filename: "arctic_monkeys.jpg"
)

mac_demarco = Event.create!(
  title: "Mac Demarco at the Independent",
  body: "McBriare Samuel Lanyon 'Mac' DeMarco is a Canadian singer-songwriter, multi-instrumentalist and producer. Born in Duncan, British Columbia, he raised in Edmonton, Alberta, and moved to Vancouver for a period. He is best known for his solo career, during which he has released six studio albums, Rock and Roll Night Club, 2, Salad Days, Another One, This Old Dog, and Here Comes the Cowboy.",
  host_id: independent.id,
  location: "The Independent",
  address: "628 Divisadero St, San Francisco, CA 94117",
  capacity: 400,
  start_time: "2023-10-05T19:00:00",
)

mac_demarco_image = URI.parse("https://media.npr.org/assets/img/2017/04/24/max-demarco_wide-7519c5c528c74b4f294e62c2f8df51aa12b14c1e-s1100-c50.jpg").open
mac_demarco.photo.attach(
  io: mac_demarco_image,
  filename: "mac_demarco.jpg"
)

barbie = Event.create!(
  title: "Barbie Singalong at the Castro Theater",
  body: "Barbie is a fashion doll manufactured by the American toy company Mattel, Inc. and launched in March 1959. American businesswoman Ruth Handler is credited with the creation of the doll using a German doll called Bild Lilli as her inspiration.",
  host_id: castro.id,
  location: "The Castro Theater",
  address: "429 Castro St, San Francisco, CA 94114",
  capacity: 500,
  start_time: "2023-09-21T19:00:00",
  end_time: "2023-09-21T22:00:00",
)
barbie_image = URI.parse("https://static01.nyt.com/images/2023/07/20/multimedia/18barbie-review-ftwc/18barbie-review-ftwc-superJumbo.jpg").open
barbie.photo.attach(
  io: barbie_image,
  filename: "barbie.jpg"
)

puts "Finished creating Events"

puts "Creating tickets and likes"

# Ike tickets and likes
Ticket.create!(user_id: ike.id, event_id: 4, price: 0, quantity: 2)
Ticket.create!(user_id: ike.id, event_id: 5, price: 0, quantity: 1)
Ticket.create!(user_id: ike.id, event_id: 6, price: 0, quantity: 4)

Like.create!(user_id: ike.id, event_id: 1)


# Julio tickets and likes
Ticket.create!(user_id: julio.id, event_id: 1, price: 0, quantity: 2)
Ticket.create!(user_id: julio.id, event_id: 2, price: 0, quantity: 2)
Ticket.create!(user_id: julio.id, event_id: 3, price: 20, quantity: 2)
Like.create!(user_id: julio.id, event_id: 4)
Like.create!(user_id: julio.id, event_id: 5)

# Keren tickets and likes
Ticket.create!(user_id: keren.id, event_id: 1, price: 0, quantity: 2)
Ticket.create!(user_id: keren.id, event_id: 2, price: 0, quantity: 2)
Like.create!(user_id: keren.id, event_id: 5)

puts "Finished creating tickets and likes"

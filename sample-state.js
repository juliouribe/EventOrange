const state = {
  entities: {
    events: {
      1: {
        id: 1,
        tile: "First Friday Bike Ride",
        body: "Every first Friday we ride. This month's starting location is the Embarcadero",
        capacity: 100,
        categoryId: 3,
        hostId: 11,
        startTime: '2023-09-03T17:00:00',
        endTime: '2023-09-03T22:00:00',
        location: 'Piers 1, 1½, 3 and 5, The Embarcadero; San Francisco, California'
      },
      2: {
        id: 2,
        body: "Dolores Park Tennis Tourney",
        body: "Tennis Elo is hosting a tennis tourney this Saturday. Bring your own racket",
        capacity: 36,
        categoryId: 1,
        hostId: 25,
        startTime: '2023-08-13T09:00:00',
        endTime: '2023-08-13T14:00:00',
        location: 'Dolores St &, 19th St, San Francisco, CA 94114'
      },
      3: {
        id: 3,
        title: "Decades Night at The Monroe",
        body: "Come down to the Monroe for Decades Night! DJ CantHearYou will be spinning starting at 6pm",
        capacity: 150,
        hostId: 11,
        startTime: '2023-09-03T18:00:00',
        endTime: '',
        location: '473 Broadway, San Francisco, CA 94133'
      }
    },
    currentUser: {
      id: 3,
      email: "juliofoolio@gmail.com",
    },
    rsvps: {
      1: {
        id: 1,
        userId: 3,
        eventId: 1
      },
      2: {
        id: 1,
        userId: 3,
        eventId: 2
      },
      7: {
        id: 1,
        userId: 3,
        eventId: 3
      },
    },
    bookmarks: {
      5: {
        id: 1,
        userId: 3,
        eventId: 6
      },
      3: {
        id: 1,
        userId: 3,
        eventId: 5
      }
    },

  },
  // Honestly not sure when or if I'll use this but I'll keep it for now.
  ui: {
    loading: true / false,
    modal: true / false
  },
  errors: {
    login: ["Incorrect email/password combination"],
    eventOver: ["This event already happened"],
    eventForm: ["Event requires a start time and location"]
  },
  session: { currentUserId: 3 }
}

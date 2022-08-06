/*
database
fish is the array
each separate fish is an object
name and length are keys
fish contains objects
*/
const database = {
    fish: [
        {
          image: "https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Sweetie Pie",
          species: "big fella",
          length: "HUUUUUUGE",
          location: "Bermuda",
          food: "whatever idc"
        },
        {
          image: "https://images.pexels.com/photos/3172277/pexels-photo-3172277.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Bad Boy Charlie",
          species: "tough guy",
          length: "Oh Yeah",
          location: "Puerto Rico",
          food: "sloppy steak"
        },
        {
          image: "https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Deborah",
          species: "dime-fish",
          length: "MmmHmm",
          location: "Mozambique",
          food: "chicken tendies"
        },
        {
          image: "https://images.pexels.com/photos/78790/perch-cichlid-discus-cichlid-freshwater-fish-78790.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Clancy T. Bacchlarat",
          species: "good-timer",
          length: "My Goodness",
          location: "Bermuda",
          food: "Beer"
        },
        {
          image: "https://images.pexels.com/photos/2156316/pexels-photo-2156316.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Chief",
          species: "fancy-lad",
          length: "Oh LORD",
          location: "Puerto Rico",
          food: "funnel cake"
        }
    ]
  }
  export const getFish = () => {
      return database.fish.map(fish => ({...fish}))
  }
  
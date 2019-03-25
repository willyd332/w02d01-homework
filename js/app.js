// MIXED DATA TYPES
// 1. DATA TYPES
/*
lightSwitch = {
  status: true,
}
users = {
  user1: {
    name: ,
    address: email @email,
  }
}

spaceship = {
  hull: {
    crew: [],
    captain: ,
  },
  lasers: ,
  tractorBeam: ,
  warpDrive: ,
}

students = {
  student1: = {
    name: ,
    age: ,
  }
  student2: = {
    name: ,
    age: ,
  }
}

students = {
  student1: = {
    name: ,
    age: ,
    location: ,
  }
  student2: = {
    name: ,
    age: ,
    location: ,
  }
}

students = {
    student1: = {
      name: ,
      age: ,
      location: ,
      tvShows: [],
    }
    student2: = {
      name: ,
      age: ,
      location: ,
      tvShows: [],
    }
  }
  */

// 2. TAKE IT EASY
// 1
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
// 2
rainbow[4];
// 3
const will = {
  food: "Big Mac",
  hobby: "Wii Baseball",
  town: "Denver",
  dataType: "Integers",
}
// 4
will.hobby;

// 3. CRAZY OBJECT!
const crazyObject = {
  taco: [{
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);


// 4. OBJECT-CEPTION
const inception = {
  reality: {
    dreamLayer1: {
      dreamLayer2: {
        dreamLayer3: {
          dreamLayer4: {
            dreamLayer5: {
              dreamLayer6: {
                limbo: "Joseph Gordon Levitt"
              }
            }
          }
        }
      }
    }
  }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

// 5-7. BOND FILMS
const bondFilms = [{
    "title": "Skyfall",
    "year": 2012,
    "actor": "Daniel Craig",
    "gross": "$1,108,561,008"
  },
  {
    "title": "Thunderball",
    "year": 1965,
    "actor": "Sean Connery",
    "gross": "$1,014,941,117"
  },
  {
    "title": "Goldfinger",
    "year": 1964,
    "actor": "Sean Connery",
    "gross": "$912,257,512"
  },
  {
    "title": "Live and Let Die",
    "year": 1973,
    "actor": "Roger Moore",
    "gross": "$825,110,761"
  },
  {
    "title": "You Only Live Twice",
    "year": 1967,
    "actor": "Sean Connery",
    "gross": "$756,544,419"
  },
  {
    "title": "The Spy Who Loved Me",
    "year": 1977,
    "actor": "Roger Moore",
    "gross": "$692,713,752"
  },
  {
    "title": "Casino Royale",
    "year": 2006,
    "actor": "Daniel Craig",
    "gross": "$669,789,482"
  },
  {
    "title": "Moonraker",
    "year": 1979,
    "actor": "Roger Moore",
    "gross": "$655,872,400"
  },
  {
    "title": "Diamonds Are Forever",
    "year": 1971,
    "actor": "Sean Connery",
    "gross": "$648,514,469"
  },
  {
    "title": "Quantum of Solace",
    "year": 2008,
    "actor": "Daniel Craig",
    "gross": "$622,246,378"
  },
  {
    "title": "From Russia with Love",
    "year": 1963,
    "actor": "Sean Connery",
    "gross": "$576,277,964"
  },
  {
    "title": "Die Another Day",
    "year": 2002,
    "actor": "Pierce Brosnan",
    "gross": "$543,639,638"
  },
  {
    "title": "Goldeneye",
    "year": 1995,
    "actor": "Pierce Brosnan",
    "gross": "$529,548,711"
  },
  {
    "title": "On Her Majesty's Secret Service",
    "year": 1969,
    "actor": "George Lazenby",
    "gross": "$505,899,782"
  },
  {
    "title": "The World is Not Enough",
    "year": 1999,
    "actor": "Pierce Brosnan",
    "gross": "$491,617,153"
  },
  {
    "title": "For Your Eyes Only",
    "year": 1981,
    "actor": "Roger Moore",
    "gross": "$486,468,881"
  },
  {
    "title": "Tomorrow Never Dies",
    "year": 1997,
    "actor": "Pierce Brosnan",
    "gross": "$478,946,402"
  },
  {
    "title": "The Man with the Golden Gun",
    "year": 1974,
    "actor": "Roger Moore",
    "gross": "$448,249,281"
  },
  {
    "title": "Dr. No",
    "year": 1962,
    "actor": "Sean Connery",
    "gross": "$440,759,072"
  },
  {
    "title": "Octopussy",
    "year": 1983,
    "actor": "Roger Moore",
    "gross": "$426,244,352"
  },
  {
    "title": "The Living Daylights",
    "year": 1987,
    "actor": "Timothy Dalton",
    "gross": "$381,088,866"
  },
  {
    "title": "A View to a Kill",
    "year": 1985,
    "actor": "Roger Moore",
    "gross": "$321,172,633"
  },
  {
    "title": "License to Kill",
    "year": 1989,
    "actor": "Timothy Dalton",
    "gross": "$285,157,191"
  }
];

// 5
const bondTitles = [];
for (let k in bondFilms) {
  bondTitles.push(bondFilms[k].title)
}
console.log(bondTitles);
// 6
const oddBonds = [];
for (let k in bondFilms) {
  if (bondFilms[k].year % 2 !== 0) {
      oddBonds.push(bondFilms[k])
  }
}
console.log(oddBonds);
// 7
let bondGrossFilms = 0;
for (let k in bondFilms) {
  bondFilms[k].gross.split(',').join('');
  bondFilms[k].gross.split('$').join('');
  parseFloat(bondFilms[k].gross);
  console.log(bondFilms[k].gross);
  bondGrossFilms += Number(bondFilms[k].gross, 10);
}
console.log(bondGrossFilms);

// I couldn't get any of the various ways to do this to work...

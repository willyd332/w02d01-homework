// MIXED DATA TYPES
// 1. DATA TYPES
/*
lightSwitch = {
  status: true,
}

users = {
  user1: {
    name: ,
    address: email@email,
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
const rainbow = ["red","orange","yellow","green","blue","indigo","violet"]
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
  taco: [
    {
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
    characters: [
      {
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

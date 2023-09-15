const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};


// strings
let [ moo, neigh, baa, oink, cluck ] = farmAnimals.split(' ');

let [bessie, dolly, babe, little] = [moo, baa, oink, cluck]

let [blackAndWhite, black, pink] = [bessie, dolly, oink]

// arrays
let [red, orange, yellow, green, blue, indigo, violet] = [...colors]

let [r, o, y, g, b, i, v] = [...colors]

let indg = indigo

//objects
let { muppetName, color, song, job, partner } = muppet

let {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
const prompt = require('prompt-sync')();

const planet = prompt('Input name : ');

const planets = {
  su: 'Mercury',
  gum: 'Venus',
  ji: 'Earth',
  ha: 'Mars',
  mo: 'Jupiter',
  to: 'Saturn',
  ch: 'Uranus',
  hae: 'Neptune',
};

console.log(planets[planet]);

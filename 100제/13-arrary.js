const prompt = require('prompt-sync')();

const planets = `Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune`;

const words = planets.split(', ');

const number = parseInt(prompt('Input number'), 10) - 1;

console.log(words[number]);

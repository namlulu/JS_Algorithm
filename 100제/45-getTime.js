const date = new Date().getTime();

const year = Math.floor(date / (1000 * 3600 * 24 * 365)) + 1970;

console.log(year);

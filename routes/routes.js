const ping = require('./ping');
const allBooksWithRating = require('./allBooksWithRating');
const storeBooksInDatabase = require('./storeBooksInDatabase');
const likeDislike = require('./likeDislike');

module.exports = [ping, allBooksWithRating, storeBooksInDatabase, likeDislike];

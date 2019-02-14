const handler = require('../handler/handler.js');

module.exports = {
  method: 'GET',
  path: '/allBooksWithRating',
  handler: handler(),
};

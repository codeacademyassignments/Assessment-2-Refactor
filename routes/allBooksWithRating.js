// const handler = require('../handler/handler.js');
const { getBooksWithRating, groupBooksByAuthor } = require('../src/Books');

const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
module.exports = {
  method: 'GET',
  path: '/allBooksWithRating',
  handler: async (request, h) => {
    const booksWithRating = await getBooksWithRating(url1, url2);
    return h.response(groupBooksByAuthor(booksWithRating));
  },
};

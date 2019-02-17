// import { storeBooksInDataBase } from '../src/Books/storeBooks';
const { storeBooksInDataBase } = require('../src/Books/storeBooks');

const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

module.exports = {
  method: 'GET',
  path: '/storeBooksInDatabase',
  handler: async (request, h) => {
    await storeBooksInDataBase(url1, url2);
    return h.response('Success');
  },
};

// import model from '../../models';
const model = require('../../models');

const { getBooksWithRating } = require('./index');

const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
const storeBooksInDataBase = (urlForBooks, urlForRating) => new Promise(async (resolve, reject) => {
  const booksWithRating = await getBooksWithRating(urlForBooks, urlForRating);
  await Promise.all(booksWithRating.map(async book => new Promise(async (resolveInside) => {
    await model.Book.generate(
      book.Name, book.id, book.Author, book.rating,
    ).catch((error => console.log(error.message)));
    resolveInside();
  }).catch(error => reject(error.message)))).then(() => { console.log('Successful'); resolve('Successful'); }).catch(error => reject(error.message));
});

// storeBooksInDataBase(url1, url2);

module.exports = { storeBooksInDataBase };

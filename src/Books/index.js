const https = require('https');

// const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
// const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

const promiseForGetRequest = url => new Promise(((resolve) => {
  https.get(url, (response) => {
    let result = '';
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      resolve(JSON.parse(result));
    });
  });
}));

const promiseForGetRatingOfBook = (book, url) => promiseForGetRequest(`${url}${book.id}`);

const mergeRatingAndBook = (ratings, books) => {
  const resultArray = [];
  books.forEach((book, index) => {
    resultArray.push(Object.assign({}, book, ratings[index]));
  });
  return resultArray;
};

const getBooksWithRating = (urlForBooks, urlForRating) => promiseForGetRequest(urlForBooks).then((allBooks) => {
  const promiseForAllBooksRating = allBooks.books.map(book => promiseForGetRatingOfBook(book, urlForRating));
  return Promise.all(promiseForAllBooksRating).then(allRatings => mergeRatingAndBook(allRatings, allBooks.books));
});

// getBooksWithRating(url1, url2).then(console.log);


module.exports = {
  promiseForGetRequest, getBooksWithRating, mergeRatingAndBook, promiseForGetRatingOfBook,
};

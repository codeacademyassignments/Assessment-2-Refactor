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
      resolve(JSON.parse(result.toString()));
    });
  });
}));


module.exports = { promiseForGetRequest };

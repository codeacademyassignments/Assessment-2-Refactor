const {
  promiseForGetRequest, getBooksWithRating, mergeRatingAndBook, promiseForGetRatingOfBook, groupBooksByAuthor,
} = require('../../src/Books');

const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

describe('promiseForGetRequest', () => {
  const requestUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  const result = {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };
  it('should return promise', async () => {
    await expect(promiseForGetRequest(requestUrl)).resolves.toEqual(result);
  });
});

describe('getBooksWithRating', () => {
  it('should return books with rating attach', async () => {
    await getBooksWithRating(url1, url2).then((books) => {
      expect(books[0]).toHaveProperty('rating');
      expect(books[0]).toHaveProperty('id');
      expect(books[0]).toHaveProperty('Name');
      expect(books[0]).toHaveProperty('Author');
    });
  });
  it('should return books with rating in array', async () => {
    await getBooksWithRating(url1, url2).then((books) => {
      // console.log(books);
      expect(Array.isArray(books)).toBe(true);
    });
  });
});

describe('mergeRatingAndBook', () => {
  const rating = [{ rating: 1 }, { rating: 2 }];
  const booksWithoutRating = [{
    Name: 'Harry Potter',
    id: 10,
    Author: 'JK Rowling',
  }, {
    Name: 'The Alchemist',
    id: 20,
    Author: 'Paulo Coelho',
  }];
  const booksWithRating = [{
    Name: 'Harry Potter',
    id: 10,
    rating: 1,
    Author: 'JK Rowling',
  }, {
    Name: 'The Alchemist',
    id: 20,
    rating: 2,
    Author: 'Paulo Coelho',
  }];
  it('should merge books and rating array', () => {
    expect(mergeRatingAndBook(rating, booksWithoutRating)).toEqual(booksWithRating);
  });
  it('should also merge even passed array are in reverse order', () => {
    expect(mergeRatingAndBook(booksWithoutRating, rating)).toEqual(booksWithRating);
  });
});

describe('promiseForGetRatingOfBook', () => {
  const book = {
    Author: 'J K Rowling',
    id: 10,
    Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
  };
  it('should return promise which resolves to rating object', async () => {
    await expect(promiseForGetRatingOfBook(book, url2)).resolves.toEqual({ rating: 4.45 });
  });
});

describe('groupBooksByAuthor', () => {
  const booksWithRating = [{
    Author: 'J K Rowling',
    id: 10,
    Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
    rating: 4.45,
  },
  {
    Author: 'J K Rowling',
    id: 20,
    Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
    rating: 4.38,
  },
  {
    Author: 'Sidney Sheldon',
    id: 80,
    Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
    rating: 4.02,
  },
  {
    Author: 'Sidney Sheldon',
    id: 100,
    Name: 'Tell Me Your Dreams',
    rating: 3.93,
  }];

  const booksGroupedByAuthor = {
    'J K Rowling': [
      {
        Author: 'J K Rowling',
        id: 10,
        Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
        rating: 4.45,
      },
      {
        Author: 'J K Rowling',
        id: 20,
        Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
        rating: 4.38,
      }],
    'Sidney Sheldon': [
      {
        Author: 'Sidney Sheldon',
        id: 80,
        Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
        rating: 4.02,
      },
      {
        Author: 'Sidney Sheldon',
        id: 100,
        Name: 'Tell Me Your Dreams',
        rating: 3.93,
      }],
  };
  it('should group books by author names', () => {
    expect(groupBooksByAuthor(booksWithRating)).toEqual(booksGroupedByAuthor);
  });
});

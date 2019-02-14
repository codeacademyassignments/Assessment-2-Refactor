const { promiseForGetRequest } = require('../../src/Books');

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

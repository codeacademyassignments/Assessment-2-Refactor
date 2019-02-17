const model = require('../../models');
const { storeBooksInDataBase } = require('../../src/Books/storeBooks');

describe('storeBooksInDataBase', () => {
  beforeAll(async () => {
    await model.Book.truncate();
  });
  afterAll(() => {
    model.sequelize.close();
  });

  it('should insert all the entries in database', async () => {
    const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
    const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
    expect(await model.Book.count()).toEqual(0);
    await storeBooksInDataBase(url1, url2).then(async () => {
      expect(await model.Book.count()).toEqual(15);
    });
  });
});

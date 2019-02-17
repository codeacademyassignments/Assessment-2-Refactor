const model = require('./../../models');

afterAll(() => {
  model.sequelize.close();
});
describe('Book generate', () => {
  beforeAll(async () => {
    await model.Book.truncate();
  });

  it('method generate: should create two entry in table', async () => {
    await model.Book.generate('Harry Potter Prisoner of Azkeban', 1232, 'J K Rowling', 4.5);
    await model.Book.generate('The Alchemist', 1231, 'Paulo Coelo', 4.2);
    expect(await model.Book.count()).toEqual(2);
  });
  it('method generate: should create one entry with id: 3432', async () => {
    await model.Book.generate('The Alchemist', 1233, 'Paulo Coelo', 4.2);
    expect(await model.Book.count({
      where: {
        bookId: 1233,
      },
    })).toEqual(1);
    expect(await model.Book.count()).toEqual(3);
  });


  it('method generate: should throw error when bookId already exist', async () => {
    try {
      await model.Book.generate('The Alchemist', 1233, 'Paulo Coelo', 4.2);
    } catch (err) {
      expect(err.message).toEqual('Validation error');
    }
  });
});

describe('Like Update', () => {
  // afterAll(() => {
  //   model.sequelize.close();
  // });
  it(' should update one entry with id: 1233', async () => {
    await model.Book.updateLikeStatus(true, 1233);
    expect(await model.Book.count({
      where: {
        bookId: 1233,
        liked: true,
      },
    })).toEqual(1);
    // expect(await model.Book.count()).toEqual(3);
  });
});

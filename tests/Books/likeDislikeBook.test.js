const likeOrDislike = require('../../src/Books/likeDislikeBook');
const model = require('../../models');

describe('likeOrDislike', () => {
  afterAll(() => {
    model.sequelize.close();
  });
  it('should update like state of passed bookId', async () => {
    await likeOrDislike(1231, 'like');
    expect(await model.Book.count({
      where: {
        bookId: 1233,
        liked: true,
      },
    })).toEqual(1);
  });
});

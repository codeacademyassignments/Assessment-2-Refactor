const model = require('../../models');

const likeOrDislikeBook = (bookId, like) => new Promise((async (resolve) => {
  if (like === 'like') {
    await model.Book.updateLikeStatus(true, bookId);
    resolve('success');
  }
  if (like === 'dislike') {
    await model.Book.updateLikeStatus(false, bookId);
    resolve('success');
  }
  resolve('invalid arguements');
}));

module.exports = likeOrDislikeBook;

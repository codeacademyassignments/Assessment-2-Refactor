

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    bookAuthor: DataTypes.STRING,
    bookId: DataTypes.INTEGER,
    bookName: DataTypes.STRING,
    bookRating: DataTypes.FLOAT,
    liked: DataTypes.BOOLEAN,
  }, {});

  Book.generate = (bookName, bookId, bookAuthor, bookRating) => Book.create({
    bookName, bookId, bookAuthor, bookRating,
  });

  Book.updateLikeStatus = (like, bookId) => Book.update({ liked: like }, {
    where: {
      bookId,
    },
  });
  return Book;
};

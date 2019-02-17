const Joi = require('joi');
const likeDislike = require('../src/Books/likeDislikeBook');

module.exports = {
  method: 'GET',
  path: '/{bookId}/{likeOrDislike}',
  handler: async (request, h) => {
    const queryResult = await likeDislike(request.params.bookId, request.params.likeOrDislike);
    return h.response(queryResult);
  },
  options: {
    validate: {
      params: {
        bookId: Joi.number().required(),
        likeOrDislike: Joi.string().required(),
      },
    },
  },
};

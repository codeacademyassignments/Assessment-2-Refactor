const server = require('../../server');

describe('server', () => {
  it('should return pong', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/allBooksWithRating',
    });
    expect(response.statusCode).toEqual(200);
    expect(response.result).toEqual('pong');
  });
});

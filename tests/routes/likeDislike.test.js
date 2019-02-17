const server = require('../../server');

describe('server', () => {
  it('should return pong', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/1231/like',
    });
    expect(response.statusCode).toEqual(200);
  });
});

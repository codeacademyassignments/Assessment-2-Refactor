const server = require('../../server.js');

describe('server', () => {
  it('should return pong', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/ping',
    });
    expect(response.statusCode).toEqual(200);
  });
});

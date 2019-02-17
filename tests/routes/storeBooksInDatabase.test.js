const server = require('../../server');

describe('server', () => {
  it('should return successful status', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/storeBooksInDatabase',
    });
    expect(response.statusCode).toEqual(200);
  });
});

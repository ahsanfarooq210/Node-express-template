import request from 'supertest';

import { app } from '../app';

describe('App', () => {
  it('should respond with 404 for unknown route', async () => {
    const response = await request(app).get('/non-existent-route');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message', 'Resource not found');
  });
});

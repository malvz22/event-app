import supertest from 'supertest';
import App from '../app';

const app = new App().app;

describe('GET main route API', () => {
  it('Should return API main end point', async () => {
    const response = await supertest(app).get('/');

    expect(response.status).toBe(200);
  });
});

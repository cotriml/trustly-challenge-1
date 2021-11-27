import app from '@/main/config/app'

import request from 'supertest'

describe('Date Time Routes', () => {

  describe('GET /date-time', () => {
    test('Should return 200 on GET', async () => {
      await request(app)
        .get('/date-time/utc')
        .expect(200)
    })
  })

  describe('GET /', () => {
    test('Should return 200 on GET', async () => {
      await request(app)
        .get('/')
        .expect(200)
    })
  })
})

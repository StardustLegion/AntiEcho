const request = require('supertest');
const express = require('express');
 
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

describe('Route integration', () => {

  describe('/articles', () => {
    describe('GET', () => {
      it('responds with 200 status and json content type', (done) => {
        request(HOST)
          .get('/api/articles')
          .expect('Content-Type', /json/)
          .expect(200, done);
      })
    })
  })
  
  describe('/top', () => {
    describe('GET', () => {
      it('responds with 200 status and json content type', (done) => {
        request(HOST)
          .get('/api/top')
          .expect('Content-Type', /json/)
          .expect(200, done);
      })
    })
  }) 

  describe('/badPath', () => {
    describe('GET', () => {
      it('responds with 404 status', (done) => {
        request(HOST)
        .get('/api/badPath')
        .expect(404, done)
      })
    })
  })

})

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import chaiThings from 'chai-things';

import app from '../app';
import users from '../mock/data';

chai.use(chaiHttp);
chai.use(chaiThings);
const reader = () => chai.request(app);

describe('Testing the user', () => {
  it('user should be able to get a welcome message', (done) => {
    reader()
      .get('/')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('user  not be able to get to the required response with wrong params', (done) => {
    reader()
      .post('/')
      .end((error, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(404);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('user should be able to signin', (done) => {
    reader()
      .post('api/v1/auth/login')
      .send(users[0])
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('user should not be able to signin if there is no password', (done) => {
    reader()
      .post('api/v1/auth/login')
      .send(users[3])
      .end((error, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(400);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('user should not be able to signin if the email is uncomplete', (done) => {
    reader()
      .post('api/v1/auth/login')
      .send(users[1])
      .end((error, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(400);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('user should not be able to signin if the email is uncomplete', (done) => {
    reader()
      .post('api/v1/auth/login')
      .send(users[4])
      .end((error, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(400);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
  it('user should not be able to signin if the email is uncomplete', (done) => {
    reader()
      .post('api/v1/auth/login')
      .send(users[4])
      .end((error, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(400);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.a('string');
        done(error);
      });
  });
});

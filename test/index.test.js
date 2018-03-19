const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app');

describe('index route', () => {
  it('should return message "welcome buddy"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, res) => {
      res.body.message.should.equal('Welcome Buddy!');
      done()
    })
  })
})
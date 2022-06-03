let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../');

const faker = {name: "ccmg", email: "ccmg@gmail.com"};
//Our parent block
describe('Podcast', () => {
 describe('/GET media', () => {
     it('it should GET all the podcast', (done) => {
     chai.request(server)
       .get('/media')
       .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a('object');
             (res.body.podcasts.length).should.be.eql(1);
             (res.body.total).should.be.eql(1);
             done();
          });
       });
  });
describe('/GET message', () => {
     it('it should GET a message', (done) => {
     chai.request(server)
         .get('/message')
         .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               done();
            });
         });
     });

     describe('/Post API Request',  () => {
         it('Verify parameters', function (done) {
             chai
             .request(server)
             .post('/')
             .send({name:faker.name, email:faker.email})
             .end((err, res) => {
                res.should.have.status(200);
                res.should.to.be.json;
                res.body.should.be.a('object');
                should.not.exist(err);
                done();

         })
     })
});
describe('Get API Request', () => {
    it('Verify using other details', function (done) {
        chai
        .request(server)
        .get('/')
        .end((err, res) => {
            //console.log(res);
        res.should.have.status(404);
        res.should.to.be.json;
        res.body.should.be.a('object');
        should.not.exist(err);
        done();
        })
    })
})
})
import 'mocha';
import chai = require('chai');
import chaiHttp = require('chai-http');
import app from '../index';

chai.use(chaiHttp);

describe('Routes', () => {
    context('without arguments - Test Mocha', function() {
        it('should return 0', function() {
          chai.expect(0).to.equal(0);
        })
      })
    it('should let use post and return response from /api/v1/parse', (done) => {
          chai.request(app)
            .post('/api/v1/parse')
            .send({data:'JOHN0000MICHAEL0009994567'}).then((res) => {
                // console.log('Request Test', typeof res.body);
                console.log('Request Test', res.status);
                // chai.expect(res).has.statusCode(200)
                chai.expect(res.body).has.property('statusCode', 200);
                chai.expect(res.body).has.property('data').which.is.an('object');
                chai.expect(res.body.data).to.eql({ firstName: 'JOHN0000', lastName: 'MICHAEL000', clientId: '9994567' });
                done();
        });
    });
});
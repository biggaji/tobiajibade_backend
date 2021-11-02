import chai ,{ expect } from "chai";
import chaiHttp from 'chai-http';
import { APP } from '../index';
let should = chai.should();
chai.use(chaiHttp);

describe('Test for all CRUD routes on tobiajibade.com', () => {
    describe("POST /control/hire", () => {
        it("It Should save the hire details in the database", (done) => {
            let payload = {
              employer_name: "biggaji",
              employer_company: "Circleci",
              employer_email: "tobiajibade2017@yandex.com",
              budget: "more-five",
              launch_timeframe: "btw_1-2m",
            };

            chai.request(APP)
            .post('/control/hire')
            .send(payload)
            .end((err, result) => {
                if(err) {
                    throw err;
                }
                console.log(result.body)
                expect(result).to.have.status(201);
                expect(result).to.be.json;
                done();
            });
        });
    });

    describe("POST /control/hire", () => {
      it("It Should not save the hire details in the database", (done) => {
        let payload = {
          employer_name: "biggaji",
          employer_company: "Circleci",
          employer_email: "tobiajibade2017@yandex.com",
          budget: "more-five",
        //   launch_timeframe: "btw_1-2m",
        };

        chai
          .request(APP)
          .post("/control/hire")
          .send(payload)
          .end((err, result) => {
            if (err) {
              throw err;
            }
            console.log(result.body);
            expect(result).to.have.status(500);
            expect(result).to.be.json;
            done();
          });
      });
    });

    describe("POST /control/contact", () => {
        it("Should save contact details into the database", (done) => {
            let payload = {
                fullname: "Tobi Ajibade",
                email: "herityjohnny14@gmail.com",
                message: "Hello there, planning to dockerize you! See ya!"
            };

            chai.request(APP)
            .post('/control/contact')
            .send(payload)
            .then(res => {
                console.log(res.body)
                expect(res).to.be.json;
                expect(res).to.have.status(201);
                done();
            })
            .catch(err => {
                throw err;
            })
        });
    });

    describe("POST /control/contact", () => {
      it("Should not save contact details into the database", (done) => {
        let payload = {
          fullname: "Tobi Ajibade",
          email: "herityjohnny14@gmail.com",
        //   message: "Hello there, planning to dockerize you! See ya!",
        };

        chai
          .request(APP)
          .post("/control/contact")
          .send(payload)
          .then((res) => {
            console.log(res.body);
            expect(res).to.be.json;
            expect(res).to.have.status(500);
            done();
          })
          .catch((err) => {
            throw err;
          });
      });
    });
});
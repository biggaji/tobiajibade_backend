"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importStar(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const index_1 = require("../index");
let should = chai_1.default.should();
chai_1.default.use(chai_http_1.default);
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
            chai_1.default.request(index_1.APP)
                .post('/control/hire')
                .send(payload)
                .end((err, result) => {
                if (err) {
                    throw err;
                }
                console.log(result.body);
                (0, chai_1.expect)(result).to.have.status(201);
                (0, chai_1.expect)(result).to.be.json;
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
            chai_1.default
                .request(index_1.APP)
                .post("/control/hire")
                .send(payload)
                .end((err, result) => {
                if (err) {
                    throw err;
                }
                console.log(result.body);
                (0, chai_1.expect)(result).to.have.status(500);
                (0, chai_1.expect)(result).to.be.json;
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
            chai_1.default.request(index_1.APP)
                .post('/control/contact')
                .send(payload)
                .then(res => {
                console.log(res.body);
                (0, chai_1.expect)(res).to.be.json;
                (0, chai_1.expect)(res).to.have.status(201);
                done();
            })
                .catch(err => {
                throw err;
            });
        });
    });
    describe("POST /control/contact", () => {
        it("Should not save contact details into the database", (done) => {
            let payload = {
                fullname: "Tobi Ajibade",
                email: "herityjohnny14@gmail.com",
                //   message: "Hello there, planning to dockerize you! See ya!",
            };
            chai_1.default
                .request(index_1.APP)
                .post("/control/contact")
                .send(payload)
                .then((res) => {
                console.log(res.body);
                (0, chai_1.expect)(res).to.be.json;
                (0, chai_1.expect)(res).to.have.status(500);
                done();
            })
                .catch((err) => {
                throw err;
            });
        });
    });
});

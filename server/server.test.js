const request = require("supertest");
const chai = require("chai");
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;

var app = require("./server").app;  

describe("Server", () =>{
    it("should return valid response", (done) =>{
        request(app)
        .get("/")
        .expect((res) => {
            expect(res.body).includes({
                error: "Page not found."
            })
        })
        .expect(404)
        .end((err, res) => {
            if(err) throw err;
            done();
        });
    });    
});


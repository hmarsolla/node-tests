const utils = require("./utils");
const chai = require("chai");
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;

describe("Utils", () => {
    it("should add two numbers", () => {
        var res = utils.add(33,11);
        expect(res).equal(44).to.be.a("number");
    }); 
    
    it("should square a number", () =>{
        var res = utils.square(4);
        expect(res).equal(16).to.be.a("number");
    });
    
    it("should async add two numbers", (done) => {
        var res = utils.asyncAdd(4, 3, (sum) => {
            expect(sum).to.be.equal(7).to.be.a("number");
            done();
        });
    });
    
    it("should async square two numbers", (done) => {
        var res = utils.asyncSquare(4, (sum) => {
            expect(sum).to.be.equal(16).to.be.a("number");
            done();
        });
    });
});



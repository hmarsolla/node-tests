const rewire = require("rewire");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;

var app = rewire("./app");

describe("App", () => {
    var db = {
        saveUser: sinon.spy()
    }
    app.__set__("db", db);

    it("should call the spy correctly", () => {
        var spy = sinon.spy()
        spy("John", 25);
        expect(spy).to.have.been.calledWith("John", 25);
    });   

    it("should call the saveUser with user object", () => {
        var email = "john@example.com";
        var password = "123abc";

        app.handleSignup(email, password);
        expect(db.saveUser).to.have.been.calledWith({email, password});
    });
});


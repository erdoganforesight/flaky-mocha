const sum = require('../src/sum');
const chai = require('chai');
let index = 0;

describe("Flaky", function () {
    it("should pass only on first run", function () {
        chai.expect(sum(1, 2)).equal(3);
    });
    it.skip('should filter values lower than 10', function() {
        console.log("skipped test!");
        chai.expect(1).equal(1)
    });
    it("should pass only on third run", function () {
        console.log(index);
        index = index + 1;
        if (index === 3) {
            chai.expect(sum(1, 2)).equal(3);
        } else {
            console.log("wrong answerr!!");
            chai.expect(sum(1, 2)).equal(5);
        }
    });
    it("should not pass", function () {
        chai.expect(sum(1, 2)).equal(5);
    });
});
const sub = require('../src/sub');
const chai = require('chai');
let index = 0;

describe("Flaky-sub-most", () => {
    it("should pass only on third run", () => {
        console.log(index);
        index = index + 1;
        if (index === 3) {
            chai.expect(sub(1, 2)).equal(-1);
        } else {
            console.log("wrong answerr!!");
            chai.expect(sub(1, 2)).equal(5);
        }
    });

    it.skip('it is skipped', () => {
        chai.expect(sub(1, 2)).equal(3);
    });

    it("should not pass", () => {
        chai. expect(sub(1, 2)).equal(5);
    });

    it("should raise error", () => {
        throw new Error("intentional error!");
    });
});

describe("Flaky-sub-most-2", () => {
    it("should pass only on third run", () => {
        console.log(index);
        index = index + 1;
        if (index === 3) {
            chai.expect(sub(1, 2)).equal(-1);
        } else {
            console.log("wrong answerr!!");
            chai.expect(sub(1, 2)).equal(5);
        }
    });

    it.skip('it is skipped', () => {
        chai.expect(sub(1, 2)).equal(3);
    });

    it("should not pass", () => {
        chai.expect(sub(1, 2)).equal(5);
    });

    it("should raise error", () => {
        throw new Error("intentional error!");
    });
});

describe("success-sub", () => {
    it("should dasdasdasdasda", () => {
        chai.expect(sub(1, 2)).equal(3);
    });
});
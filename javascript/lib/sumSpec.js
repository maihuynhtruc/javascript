var sum = require('./sum');
describe("sum",function () {
   it("should return correctly", function () {
       expect(sum(1,2)).toBe(3);
   });
});
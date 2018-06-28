const test = require("tape")

test("should return -1 when the value is not present in Array", assert => {
    assert.plan(1);

    // 4 is not present in this array so passes
    assert.equal(-1, [1, 2, 3].indexOf(4));
});
const test = require("tape");
const DiceType = require("../core/diceType");

test("Dice sides cannot be less than zero", assert => {
    var actual = 0;

    actual = -1;
    assert.throws(() => {
        (() => new DiceType("Library", actual))();
    }, "Invalid argument: maxSides", `Dice type of ${actual} should throw`);

    actual = -15;
    assert.throws(() => {
        (() => new DiceType("Library", actual))();
    }, "Invalid argument: maxSides", `Dice type of ${actual} should throw`);

    assert.end();
});

test("Dice cannot have more than twenty sides", assert => {
    var actual = 0;

    actual = 21;
    assert.throws(() => {
        (() => new DiceType("Library", actual))();
    }, "Invalid argument: maxSides", `Dice type of ${actual} should throw`);

    actual = 500;
    assert.throws(() => {
        (() => new DiceType("Library", actual))();
    }, "Invalid argument: maxSides", `Dice type of ${actual} should throw`);

    assert.end();
});

test("Dice can have between 2 and 20 sides", assert => {
    var sides = 0;

    sides = 2;
    assert.doesNotThrow(() => {
        (() => new DiceType("Library", sides))();
    }, `Dice of size ${sides} does not throw`);

    sides = 20;
    assert.doesNotThrow(() => {
        (() => new DiceType("Library", sides))();
    }, `Dice of size ${sides} does not throw`);

    assert.end();
});
const test = require("tape");
const Settings = require("../core/settings");

test("Default max hand size is applied", assert => {
    var s = new Settings();
    var actual = s.maxHandSize();
    var expected = 3;

    assert.equal(actual, expected, `Max Hand Size expected: ${expected}, actual: ${actual}`);

    assert.end();
});

test("Default bag contains eight library dice", assert => {
    var s = new Settings();
    var expected = 8;
    var actual = 0;

    s.bag().forEach(die => {
        if (die.getTypeName() === "Library") {
            actual += 1;
        }
    });

    assert.equal(actual, expected, `Library dice expected: ${expected}, actual: ${actual}`);

    assert.end();
});
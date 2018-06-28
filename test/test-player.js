const test = require("tape");
const Player = require("../core/player");

test("Player has a property for getScore", assert => {
    assert.plan(2);

    var p = new Player();

    assert.true(p);

    var actual = typeof p.addToScore === "function";

    assert.true(actual, `Property called 'getScore' expected. Actual: ${actual}`);
});

function add(n, p, expected) {
    p.addToScore(n);

    return [p.getScore(), expected];
}

test("Player has a function for addToScore", assert => {
    assert.plan(3);

    var p = new Player();
    var expected = 0;
    var actual = p.getScore();

    assert.equal(actual, expected, `Expected score: ${expected}. Actual: ${actual}`);

    [actual, expected] = add(15, p, 15);
    assert.equal(actual, expected, `Expected score: ${expected}. Actual: ${actual}`);

    [actual, expected] = add(5, p, 20);
    assert.equal(actual, expected, `Expected score: ${expected}. Actual: ${actual}`);
});
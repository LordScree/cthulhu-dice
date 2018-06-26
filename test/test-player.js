const test = require('tape')
const player = require('../core/player')

test('Player has a property for getScore', function (t) {
    t.plan(2)

    var p = new player()
    t.true(p)

    var actual = (typeof p.addToScore === 'function')
    t.true(actual, 'Property called "getScore" expected. Actual: ' + actual.toString())
})

test('Player has a function for addToScore', function (t) {
    t.plan(3)

    var p = new player()
    var expected = 0
    var actual = p.getScore()
    t.equal(actual, expected, 'Expected score: ' + expected + '. Actual: ' + actual)

    p.addToScore(15)
    expected = 15
    actual = p.getScore()
    t.equal(actual, expected, 'Expected score: ' + expected + '. Actual: ' + actual)

    p.addToScore(5)
    expected = 20
    actual = p.getScore()
    t.equal(actual, expected, 'Expected score: ' + expected + '. Actual: ' + actual)
})

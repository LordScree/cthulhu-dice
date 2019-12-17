const Settings = require("./settings")
const Engine = require("./engine")
const DiceType = require("./diceType")

// A player has a "score".
// A player has a function "addToScore", which adds a specified number of signs to the player's current score.

function Player() {
    this._score = 0;
    this._stashOfElderSigns = [];
    this._poolOfTentacles = [];
}

Player.prototype.getScore = function () {
    return this._score;
}

Player.prototype.addToScore = function (newSigns) {
    if (!newSigns || isNaN(newSigns)) throw "Invalid argument: newSigns";
    if (newSigns < 0) throw "Value of newSigns cannot be lower than zero. Players cannot lose scores.";

    this._score += newSigns;
}

Player.prototype.takeTurn = function (engine) {
    if (!engine) throw "Invalid argument: engine";

    var hand = Engine.take(Settings.bag(), 3);
    var result = Engine.roll(hand);
    var downed = false;

    if (result.tentacles.length + this._poolOfTentacles.length >= 3) {
        // Player has been downed.
        downed = true;
    } else {
        // Add Elder Signs.
        hand = Engine.transferWinnings(result, this._poolOfTentacles, this._stashOfElderSigns);
    }

    return downed;
}

module.exports = Player;
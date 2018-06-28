// A player has a "score".
// A player has a function "addToScore", which adds a specified number of signs to the player's current score.

function Player() {
    this._score = 0;
}

Player.prototype.getScore = function () {
    return this._score;
}

Player.prototype.addToScore = function (newSigns) {
    if (!newSigns || isNaN(newSigns)) throw "Invalid argument: newSigns";
    if (newSigns < 0) throw "Value of newSigns cannot be lower than zero. Players cannot lose scores.";
    this._score += newSigns;
}

module.exports = Player;
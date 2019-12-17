const HandResult = require("./handResult");

function Engine() {
    // Empty constructor.
}

// Take n dice from bag and return them.
// The dice removed must be randomly picked from the remaining dice in the bag.
Engine.prototype.take = function(bag, n) {
    throw "Not implemented";
}

// Roll the dice in the given hand, picking one of the sides (applying the weightings as applicable).
Engine.prototype.roll = function(hand) {
    throw "Not implemented";
}

// Move dice from result to the relevant pools.
Engine.prototype.transferWinnings = function(result, poolOfTentacles, stashOfElderSigns) {
    throw "Not implemented";
}

module.exports = Engine;
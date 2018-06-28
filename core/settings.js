const DiceType = require("./diceType");

function Settings() {

    function init(dice) {
        var filledBag = [];

        dice.forEach(die => {
            for (var i = 0; i < die[1]; i++) {
                filledBag.push(die[0]);
            }
        });

        return filledBag;
    }

    // Declare the types of dice, their weightings and distribution.
    // NOTE: The sum of their distribution values must match the expectedDiceBagSize value.
    // ALSO NOTE: The sum of their weighting values must match the number of sides.
    function getDiceTypes() {
        var libraryDice = new DiceType("Library", 6);
        var museumDice = new DiceType("Museum", 6);
        var tombDice = new DiceType("Tomb", 6);

        libraryDice.initialise(3, 2, 1);
        museumDice.initialise(2, 2, 2);
        tombDice.initialise(1, 2, 3);

        return [
            [libraryDice, 8],
            [museumDice, 4],
            [tombDice, 3]
        ];
    }

    // The number of dice each player rolls per turn.
    this._maxHandSize = 3;

    // The number of dice in the dice bag.
    // This value is just used for checking.
    var expectedDiceBagSize = 15;

    // Initialise the dice bag.
    var diceTypes = getDiceTypes();

    this._bag = init(diceTypes);

    // Sanity check.
    if (this._bag.length != expectedDiceBagSize) throw "Invalid initialisation options: Dice bag does not have expected size";
}

Settings.prototype.maxHandSize = function () {
    return this._maxHandSize;
}

Settings.prototype.bag = function () {
    return this._bag;
}

module.exports = Settings;
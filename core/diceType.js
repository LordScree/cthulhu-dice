
function DiceType(typeName, maxSides) {
    if (!typeName || typeName === "" || typeName === "undefined") throw "Invalid argument: typeName";
    if (!maxSides || isNaN(maxSides) || maxSides < 2 || maxSides > 20) throw "Invalid argument: maxSides";

    this._typeName = typeName;
    this._maxSides = maxSides;
}

DiceType.prototype.initialise = function (signs, clues, tentacles) {
    if (!signs || isNaN(signs) || signs < 1 || signs >= this.getMaxSides()) throw "Invalid argument: signs";
    if (!clues || isNaN(clues) || clues < 1 || clues >= this.getMaxSides()) throw "Invalid argument: clues";
    if (!tentacles || isNaN(tentacles) || tentacles < 1 || tentacles >= this.getMaxSides()) throw "Invalid argument: tentacles";
    if (signs + clues + tentacles != this.getMaxSides()) throw "Sum of sides does not equal the number of sides";

    this._signs = signs;
    this._clues = clues;
    this._tentacles = tentacles;
}

DiceType.prototype.getTypeName = function () {
    return this._typeName;
}

DiceType.prototype.getMaxSides = function () {
    return this._maxSides;
}

DiceType.prototype.getSignsWeighting = function () {
    return 1 / (this._maxSides / this._signs);
}

DiceType.prototype.getCluesWeighting = function () {
    return 1 / (this._maxSides / this._clues);
}

DiceType.prototype.getTentaclesWeighting = function () {
    return 1 / (this._maxSides / this._tentacles);
}

module.exports = DiceType;
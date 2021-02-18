var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
(function (upperCaseLetters, lowerCaseLetters, digits) {
    var useDigits = true;
    var useLowerCaseLetters = true;
    function generateRandomPw(length, typeset) {
        var result = "";
        for (var i = 0; i < length; i++) {
            var elm = typeset[Math.floor(Math.random() * typeset.length)];
            result = result + elm;
        }
        return result;
    }
    function calculateEntropy(length, typeset) {
        return Math.log2(typeset.length) * length;
    }
    /*    function combineTypeset() {
        let combinedTypeset = [];
        if (useDigits) {
            combinedTypeset.push(digits);
        }
        if (useLowerCaseLetters) {
            combinedTypeset.push(lowerCaseLetters);
        }
        return combinedTypeset.flat();
    } */
    var random = generateRandomPw(8, __spreadArrays(lowerCaseLetters, digits));
    var entropy = calculateEntropy(8, __spreadArrays(lowerCaseLetters, digits));
    var random2 = generateRandomPw(10, __spreadArrays(upperCaseLetters, lowerCaseLetters, digits));
    var entropy2 = calculateEntropy(10, __spreadArrays(upperCaseLetters, lowerCaseLetters, digits));
    console.log(random, entropy);
    console.log(random2, entropy2);
})([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
], [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
], ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

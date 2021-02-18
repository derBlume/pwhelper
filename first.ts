(function (
    upperCaseLetters: string[],
    lowerCaseLetters: string[],
    digits: string[]
) {
    let useDigits = true;
    let useLowerCaseLetters = true;
    function generateRandomPw(length: number, typeset: string[]) {
        let result: string = "";

        for (let i = 0; i < length; i++) {
            let elm = typeset[Math.floor(Math.random() * typeset.length)];
            result = result + elm;
        }

        return result;
    }

    function calculateEntropy(length: number, typeset: string[]) {
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

    let random = generateRandomPw(8, [...lowerCaseLetters, ...digits]);
    let entropy = calculateEntropy(8, [...lowerCaseLetters, ...digits]);

    let random2 = generateRandomPw(10, [
        ...upperCaseLetters,
        ...lowerCaseLetters,
        ...digits,
    ]);
    let entropy2 = calculateEntropy(10, [
        ...upperCaseLetters,
        ...lowerCaseLetters,
        ...digits,
    ]);

    console.log(random, entropy);
    console.log(random2, entropy2);
})(
    [
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
    ],
    [
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
    ],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
);

const reverseString = require("../03_reverseString/reverseString");

const palindromes = function (string) {
    let evaluated_String = string.toLowerCase().replace(/[^-a-z]/g, '');
    return (
        evaluated_String
            .split('')
            .reverse()
            .join('') == evaluated_String
    )
};

// Do not edit below this line
module.exports = palindromes;

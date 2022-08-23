const reverseString = function (string) {
    let new_String = '';
    for (i = 0; i < string.length; i++) {
        new_String += string.charAt(string.length - (1 + i) )

    }
    return new_String;
};



// Do not edit below this line
module.exports = reverseString;

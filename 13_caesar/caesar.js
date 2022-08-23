const caesar = function (string, number) {
    new_String = '';
    if (number > 26) number = number % 26; 
    for (i = 0; i < string.length; i++) {
        let current_Code = string[i].charCodeAt()
        if (current_Code >= 65 && current_Code <= 90) {
            new_Code = current_Code + number
            if (new_Code > 90) {
                new_Code -= 26
            }
            if (new_Code < 65) {
                new_Code += 26
            }
            new_String += String.fromCharCode(new_Code)

        }
        if (current_Code >= 97 && current_Code <= 122) {
            new_Code = current_Code + number
            if (new_Code > 122) {
                new_Code -= 26
            }
            if (new_Code < 97) {
                new_Code += 26
            }
            new_String += String.fromCharCode(new_Code)
        }
        if (current_Code < 65 || current_Code > 90 && current_Code < 97 || current_Code > 122) {
            new_String += string[i]
        }
    }
    return new_String
}

// const alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
// Do not edit below this line
module.exports = caesar;

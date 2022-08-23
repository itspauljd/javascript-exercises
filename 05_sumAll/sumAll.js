const sumAll = function (int1, int2) {
    let sum = 0
    if (int1 < 0 || int2 < 0 || typeof int1 != 'number' || typeof int2 != 'number') return 'ERROR'
    if (int2 > int1) {
        for (i = 0; i < int2; i++) {
            let next = int1 + i
            sum += next
        }
        return sum
    } else {
        for (i = 0; i < int1; i++) {
            let next = int2 + i
            sum += next
        }
        return sum
    };
}
// Do not edit below this line
module.exports = sumAll;

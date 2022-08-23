const fibonacci = function (input) {
    let number = Number(input)
    if (number < 0) {
        return "OOPS"
    } else {
        let sequence = [1, 1];
        for (i = 2; i < number ; i++){
            sequence.push(sequence[i-1] + sequence[i-2])
        }        
        return sequence[number - 1]
    }
};

// Do not edit below this line
module.exports = fibonacci;

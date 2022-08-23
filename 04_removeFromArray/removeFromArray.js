const removeFromArray = function (array) {
    const args = Array.prototype.slice.call(arguments);
    args.forEach((element) => {
        const index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1);
        }
    });
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

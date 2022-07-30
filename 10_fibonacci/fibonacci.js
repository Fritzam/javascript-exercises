const fibonacci = function(numberInSequence) {
    if(numberInSequence < 0) {
        return "OOPS";
    }

    let requestedNumber = [0, 1];
    for (let i = 2; i <= numberInSequence; i++) {
        requestedNumber.push(requestedNumber[i-2] + requestedNumber[i-1]);
    }
    return requestedNumber[numberInSequence];
};

// Do not edit below this line
module.exports = fibonacci;

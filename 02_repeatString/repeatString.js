const repeatString = function(string, numberOfRepeats) {
    let repeatedString = '';
    if (numberOfRepeats > 0) {
        for (let i = 0; i < numberOfRepeats; i++) {
            repeatedString += string;
        }
    } else if (numberOfRepeats == 0) {
        return repeatedString
    } else if (numberOfRepeats < 0) {
        repeatedString = "ERROR";
    }
    return repeatedString;
};
// Do not edit below this line
module.exports = repeatString;

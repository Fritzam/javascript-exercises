const palindromes = function (string) {
    let lowered = string.toLowerCase();
    let splitted_string = lowered.split("");
    let sanitized_string = [];

    /*checks if splitted_strings elements are letters and if they are
    pushes into sanitized_string array */
    for (i = 0; i < splitted_string.length; i++) {
        if (splitted_string[i].match(/[a-z]/)) {
            sanitized_string.push(splitted_string[i]);
        }
    }
    //Declaring containers for checking purposes
    let check_1 = [];
    let check_2 = [];

    //Pushes every letter from index 0 to the end to check1
    for (let i = 0; i < sanitized_string.length; i++) {
        check_1.push(sanitized_string[i]);
    }
    //Pushes every letter from the end of the array backwards
    for (let i = sanitized_string.length - 1; i >= 0; i--) {
        check_2.push(sanitized_string[i]);
    }
    //Joins check_1 array and check_2 array into strings
    check_1 = check_1.join('');
    check_2 = check_2.join('');

    /*If strings check_1 and check_2 are equal returns true(palindrome)
    else returns false */
    if (check_1 === check_2) {
        return true;
    } else {
        return false;
    }
}



// Do not edit below this line
module.exports = palindromes;

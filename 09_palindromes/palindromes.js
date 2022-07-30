const palindromes = function (string) {
    let lowered = string.toLowerCase();
    let splitted_string = lowered.split("");
    let sanitized_string = [];
    for (i = 0; i < splitted_string.length; i++) {
        if (splitted_string[i].match(/[a-z]/)) {
            sanitized_string.push(splitted_string[i]);
        }
    }
    let check_1 = [];
    let check_2 = [];
    for (let i = 0; i < sanitized_string.length; i++) {
        check_1.push(sanitized_string[i]);
    }
    for (let i = sanitized_string.length - 1; i >= 0; i--) {
        check_2.push(sanitized_string[i]);
    }
    check_1 = check_1.join('');
    check_2 = check_2.join('');
    if (check_1 === check_2) {
        return true;
    } else {
        return false;
    }
}



// Do not edit below this line
module.exports = palindromes;

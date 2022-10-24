/*const caesar = function(string, number) {
}*/

let number = 5;
let string = "Hello, World!";
let coded_array = []
let ciphered_array = [];
for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[A-Za-z]/i)) {
       let coded = string.charCodeAt(i);
       coded_array.push(coded);
    } else {
        coded_array.push(string[i]);
    }
}
for (let i = 0; i < coded_array.length; i++) {
    if (Number.isInteger(coded_array[i])) {
        for (let j = 1; j <= number; j++) {
            let cipher = coded_array[i] + j;
            if (cipher === 123) {
                cipher = 97;
            } else if (cipher === 91) {
                cipher = 65;
            }
        }
        ciphered_array.push(String.fromCharCode(cipher));
    } else {
        ciphered_array.push(String.fromCharCode(coded_array[i]));
    }
}
console.log(ciphered_array);
// Do not edit below this line
//module.exports = caesar;

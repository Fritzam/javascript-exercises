/*const removeFromArray = function(array, ...elemsToRemove) {
    let removedArray = [];
    let toRemoveArray = [...elemsToRemove];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < toRemoveArray.length; i++) {
            if (array[i].indexOf(toRemoveArray[j]) === -1) {
                removedArray.push(array[i]);
            } else {
                continue;
            }
        }
    }
    return removedArray;

};*/
const removeFromArray = function(array, ...elemsToRemove) {
    let removedArray = [];
    let toRemoveArray = [...elemsToRemove];
    for (let i = 0; i < array.length; i++) {
        if (toRemoveArray.indexOf(array[i]) === -1) {
            removedArray.push(array[i]);
        } else {
            continue;
        }
    }
    return removedArray;

};

// Do not edit below this line
module.exports = removeFromArray;

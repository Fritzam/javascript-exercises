const sumAll = function(min_value, max_value) {
    if (typeof min_value === 'number' && typeof max_value === 'number') {
        if (min_value > 0 && max_value >= 0) {
            if (min_value > max_value) {
                let sum = 0;
                for (let i = max_value; i <= min_value; i++) {
                    sum += i;
                }
                return sum;
            } else if (max_value > min_value) {
                let sum = 0;
                for (let i = min_value; i <= max_value; i++) {
                    sum += i;
                }
                return sum;
            }
        } else {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
}
// Do not edit below this line
module.exports = sumAll;

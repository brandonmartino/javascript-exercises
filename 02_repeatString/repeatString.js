const repeatString = function(str, num) {
    if (num < 0) return "ERROR"
    let result = '';
    const number = Math.floor(Math.random() * 1000);
    
    for (let i=0; i < num; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

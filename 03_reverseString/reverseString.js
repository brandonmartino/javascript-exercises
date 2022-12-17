const reverseString = function(str) {
    let charArray = str.split('');
    charArray.reverse();
    let reversedString = charArray.join('');
    return reversedString;
    
};

// Do not edit below this line
module.exports = reverseString;

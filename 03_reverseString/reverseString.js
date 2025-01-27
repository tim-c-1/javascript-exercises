const reverseString = function(string) {
    let str = "";
    for (let i = string.length; i >= 0; i--){
        str += string.charAt(i);
    }
    console.log(str.toString())
    return str.toString()
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let cleaned = word
        .toLowerCase()
        .split("")
        .filter((c) => alphanumerical.includes(c))
        .join('');
   
    let reversed = cleaned.split("").reverse().join('');

    console.log(reversed);
    console.log("word: ", cleaned, "newWord: ", reversed);
    if(cleaned == reversed){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

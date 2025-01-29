const sumAll = function(num1, num2) {
    // console.log(typeof(num1), Number.isInteger(num1));
    
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        // console.log(Error);
        return "ERROR";
    }else {
        let sum = 0;
        let start = Math.min(num1, num2);
        let end = Math.max(num1, num2);
        console.log(start, end);
        for (let i = start; i <= end; i++){
            sum = sum + i;
            // console.log(i);
        }
        // console.log(sum);
        return sum;
    }
};

console.log(sumAll(-4, 1));

// Do not edit below this line
module.exports = sumAll;

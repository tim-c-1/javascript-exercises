const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true;
    } else {
        return false;
    }
};

//divisible by 4, NOT divisible by 100 unless divisible by 400.
// console.log(leapYears(2001));
// console.log(leapYears(2004));

// Do not edit below this line
module.exports = leapYears;

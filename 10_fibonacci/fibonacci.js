const fibonacci = function(num) {
    n = parseInt(num);
    let fibs = [0,1];
    if(n < 0){
        return "OOPS";
    } else {
        for (let i = 2; i<=n; i++){
            let x = fibs[i-2];
            let y = fibs[i-1];
            fibs.push(x + y); 
            // console.log(fibs);
        }
        return fibs[n];
    }
};
console.log(fibonacci(100));
// Do not edit below this line
module.exports = fibonacci;

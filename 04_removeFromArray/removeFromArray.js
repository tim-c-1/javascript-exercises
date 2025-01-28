const removeFromArray = function(array, ...args) {
    
    let startLength = array.length;
    console.log("start args: ", args, "\nstart array: ", array);
    for (let i = 0; i <= startLength; i++){
        // console.log(args[i]);
        let index = array.indexOf(args[i]);
        // console.log("index: ", index);
        if (index > -1){
        array.splice(index, 1);
        }
        console.log("i: ",i, "\nlength: ",array.length);
    }
    // let newarr = array.filter(a => a != args)
    if (array.length > 0){
        for (let i =0; i <= array.length; i++){
            let index = array.indexOf(args[i]);
            if (index > -1){
                array.splice(index, 1);
            }
        }
    }
    return array
};
    

console.log("end array: ", removeFromArray([1,2,2,4,5,"test"],2,4,1,"test"))

// Do not edit below this line
module.exports = removeFromArray;   

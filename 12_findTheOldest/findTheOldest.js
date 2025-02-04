const findTheOldest = function(arr) {
    const today = new Date();
    const year = today.getFullYear();

    for (const person in arr){
        if (arr[person].yearOfDeath === undefined){
            arr[person].yearOfDeath = year;
        }
    }

    let ages = arr.map((person) => person.yearOfDeath - person.yearOfBirth);
    console.log(ages);
    let oldest = Math.max(...ages);
    return arr[ages.indexOf(oldest)];
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];
// console.log(people[0].name);
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;

const getTheTitles = function(arr) {
    let titles = [];
    for (const book in books){
        titles[book] = books[book].title;
    }
    return titles;
}
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

// console.log(books[0].title);
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;

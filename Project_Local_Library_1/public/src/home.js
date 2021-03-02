// Note: Please do not change the name of the functions. The tests use those names to validate your code.
const { findAuthorById } = require("./books");



function helperFunction(groups){
  const groupingAmt = 5; // total length for the final array
  let formattedData = [];
  for (key in groups){ 
      formattedData.push({'name' : key, 'count' : groups[key]})
  }




formattedData.sort((objOne, objTwo) => {    
  return objOne.count > objTwo.count ? -1 : 1;
});

return formattedData.slice(0, groupingAmt);
}


function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const checkedOut = books.filter((book)=> !book.borrows[0].returned);
   return checkedOut.length;
}



function getMostCommonGenres(books) {
  // prepare the data to send to topFiverator
    let data = books.reduce((count, subject) => {
        const key = subject['genre'];
        if(!count[key]){
            count[key] = 0
        }
        count[key] ++;
        return count;
    },[])
 
  // send prepped data to the topFiverator
  const topFiveGenres = helperFunction(data)
  return topFiveGenres;
}

function getMostPopularBooks(books) {
  const result = [];
  for(let book of books)
  {
    result.push({"name": book.title , "count": book.borrows.length});
  }
  result.sort((item , item2) => item2.count - item.count );
  result.length = 5;
  console.log(result);
  return result;
 

}
function getAuthorNameById(authors,id)
{
  const theAuthor = findAuthorById(authors,id);
  return (`${theAuthor.name.first} ${theAuthor.name.last}`);
}
function getMostPopularAuthors(books, authors) 
{   
  const result =[];
  for(let book of books)
  {
    const theAuthor = result.find((author )=> getAuthorNameById(authors,book.authorId) === author.name )
   
    theAuthor ? theAuthor.count += book.borrows.length : result.push({"name": getAuthorNameById(authors,book.authorId), "count": book.borrows.length });
  }
  result.sort((item1 , item2) => item2.count - item1.count );
  result.length = 5;
  return result;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

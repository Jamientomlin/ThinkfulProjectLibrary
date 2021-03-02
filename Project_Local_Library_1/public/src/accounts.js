// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return result = accounts.find((acc)=> acc.id === id);
}
function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) =>{
    return account1.name.last > account2.name.last ? 1 : -1
  });
}
 function getTotalNumberOfBorrows(account, books) {
    const user = account.id;
    const found = books.filter((book) => {
      return book.borrows.some(checkout => checkout.id === user);
    });
    return found.length;
 }

  function getBooksPossessedByAccount(account, books, authors) {
    // filter the books to only get checked out books by the specific account
    let result = books.filter(({borrows}) => (borrows[0].id === account.id  && !borrows[0].returned))
      .map((book) => {
        const author = authors.find((auth) => auth.id === book.authorId); 
        return {...book, author};
      })
  
    return result;
    
  }
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

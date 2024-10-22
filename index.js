function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Network response was not ok ' + resp.statusText);
      }
      return resp.json();
    })
    .then((data) => renderBooks(data))
    .catch((error) => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; 
    bookList.appendChild(listItem);
  });
}

window.onload = fetchBooks;

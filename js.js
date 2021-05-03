const bookShelf = {
    books: ['Последнее королевство', 'Мгла', 'Страж снов'],
    updateBook(oldName, newName) {
      // Пиши код ниже этой строки
      let bookIndex = this.books.indexOf(oldName);
      console.log('book = ', bookIndex);
   
      this.books.splice(bookIndex, 1, newName);
     
      // Пиши код выше этой строки
    },
  };
  
  bookShelf.updateBook('Мгла', 'Хроники подземелий')
  
  bookShelf.updateBook('Последнее королевство', 'Дюна')
  
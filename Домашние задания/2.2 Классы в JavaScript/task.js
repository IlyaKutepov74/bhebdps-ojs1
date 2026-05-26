// Базовый класс для всех печатных изданий
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;                   
    this.releaseDate = releaseDate;     
    this.pagesCount = pagesCount;       
    this._state = 100;                 
    this.type = null;                  
  }

  fix() {
    this.state = this._state * 1.5;     
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;                 
    } else if (newState > 100) {
      this._state = 100;                
    } else {
      this._state = newState;          
    }
  }

  get state() {
    return this._state;
  }
}
// Журнал – тип 'magazine', всё остальное как у базового класса
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);   
    this.type = 'magazine';                 
  }
}

// Книга – тип 'book' + свойство author
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);   
    this.author = author;                   
    this.type = 'book';                     
  }
}

// Жанровые разновидности книг – меняется только type
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';                   
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';                
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';                
  }
}
// Пример 
const sherlock = new PrintEditionItem(
  'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
  2019,
  1008
);
console.log(sherlock.releaseDate); 
console.log(sherlock.state);      
sherlock.fix();
console.log(sherlock.state);       

const picknick = new FantasticBook(
  'Аркадий и Борис Стругацкие',
  'Пикник на обочине',
  1972,
  168
);
console.log(picknick.author);      
picknick.state = 10;
console.log(picknick.state);      
picknick.fix();
console.log(picknick.state);       
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];                      
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);              
    }
  }

  findBookBy(type, value) {
    const book = this.books.find(item => item[type] === value);
    return book ? book : null;            
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(item => item.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;                         
  }
}
const library = new Library('Библиотека имени Ленина');

library.addBook(
  new DetectiveBook(
    'Артур Конан Дойл',
    'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    'Аркадий и Борис Стругацкие',
    'Пикник на обочине',
    1972,
    168
  )
);
library.addBook(new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138));
library.addBook(new Magazine('Мурзилка', 1924, 60));

console.log(library.findBookBy('name', 'Властелин колец')); 
console.log(library.findBookBy('releaseDate', 1924).name);  

console.log('Количество книг до выдачи: ' + library.books.length); 
library.giveBookByName('Машина времени');
console.log('Количество книг после выдачи: ' + library.books.length); 

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];

  constructor(listOfBooks) {
    try {
      if (listOfBooks.length === 0) {
        throw new Error("Вы не передали книги в библиотеку");
      } else {
        listOfBooks.forEach((book) => {
          if (this.#books.includes(book)) {
            throw new Error(`В списке книг имеются дубликаты: "${book}"`);
          } else {
            this.#books.push(book);
            return this.#books;
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    try {
      if (this.#books.includes(title)) {
        throw new Error(`Книга с названием "${title}" уже существует`);
      } else {
        this.#books.push(title);
        return this.#books;
      }
    } catch (error) {
      console.error(error);
    }
  }

  removeBook(title) {
    try {
      if (this.#books.includes(title)) {
        this.#books = this.#books.filter((bookTitle) => bookTitle !== title);
        console.log(`Обновленный список книг: ${this.#books}`);
        return this.#books;
      } else {
        throw new Error(`Книги с названием "${title}" нет в списке`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  hasBook(title) {
    if (this.#books.includes(title)) {
      return true;
    } else {
      return false;
    }
  }
}

const library = new Library(["Дом грез", "Война и мир", "Три медведя"]);
console.log(library.allBooks);

console.log(library.addBook("Война и мир"));
console.log(library.addBook("Мастер и Маргарита"));


console.log(library.removeBook("Преступление и наказание"));
console.log(library.removeBook("Мастер и Маргарита"));
console.log(library.removeBook("Война и мир"));

console.log(library.hasBook("Унесенные ветром"));
console.log(library.hasBook("Война и мир"));
console.log(library.hasBook("Дом грез"));
console.log(library.hasBook("Три медведя"));
export class Book {
        constructor (title, author, description, 
                  pages) {
                  this.title = title;
                  this.author = author;
                  this.description = description;
                  this.pages = pages;
                  //this.currentPage = currentPage;
                  this.read = false;
        }

        readBook(page) {
                if (page === this.pages) {
                this.currentPage = page;
                this.read = true;
                return 1;
 
                } else if (page>= 1 && page < this.pages) {
                    this.currentPage = page;
                    /**console.log("You are now on page " + 
                    this.currentPage 
                    + " of the book " + this.title); **/
                    return 1;
                } else { return 0;}      

        }
}

let firstBook = new Book("Les Miserables", "Emile Zola", "Roman", 100);
let secondBook = new Book("Dragon Ball", "Akira Toryama", "Aventure", 100);
let thirdBook = new Book("Chevaliers", "Thomas otten", "Thriller", 100);

export const books = [firstBook, secondBook, thirdBook];
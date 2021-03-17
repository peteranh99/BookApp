class Book{
    constructor(id, title, pageCount, shortDescription, longDescription, authors, categories){
        this.id = id;
        this.title = title;
        this.pageCount = pageCount;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.authors = authors;
        this.categories = categories;
    }
}

export default Book;
import Book from '../../Objects/Book';
import BOOKS from './DataJson/books.json';

const DummyBooks = [];
BOOKS.forEach((item)=>{
    DummyBooks.push(
        new Book(item.id, item.title, item.pageCount, item.shortDescription, item.longDescription, item.authors, item.categories)
    );
});
export default DummyBooks;
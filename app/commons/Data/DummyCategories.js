import Category from '../../Objects/Category';
import CATEGORIES from './categories.json';

const DummyCategories = [];
CATEGORIES.forEach((cat)=>{
    DummyCategories.push(
        new Category(cat.id, cat.name)
    );
});
export default DummyCategories;
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../../screens/CategoriesScreen';
import BookCategoryScreen from '../../screens/BookCategoryScreen';
import BookDetailScreen from '../../screens/BookDetailScreen';
import { createAppContainer } from 'react-navigation';

const BookNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    BookCategory: {
        screen: BookCategoryScreen,
    },
    BookDetail: {
        screen: BookDetailScreen,
    },
});
export default createAppContainer(BookNavigator);
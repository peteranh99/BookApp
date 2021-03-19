import BOOKS from '../../commons/Data/DataJson/books.json';
import { TOGGLE_FAVORITE } from '../actions/books';

const initialState = {
    books: BOOKS,
    filters: BOOKS,
    favorite: [],
};

const BookReducer = (state = initialState, action)=>{
    const{type, payload} = action;
    switch (type) {
    case TOGGLE_FAVORITE:
        const existingIndex = state.favorite.findIndex(item => item.id === payload);
        if (existingIndex > -1){
            // remove
            const newFavorite = [...state.favorite];
            newFavorite.splice(existingIndex, 1);
            return {...state, favorite: newFavorite };
        }else{
            // add
            const item = state.books.find(item=>item.id === payload);
            return {...state, favorite: state.favorite.concat(item)};
        }
    default:
        return state;
    }
};
export default BookReducer;
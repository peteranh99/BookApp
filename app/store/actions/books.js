export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavoriteBook = (id)=>{
    return {
        type: TOGGLE_FAVORITE,
        payload: id,
    };
};
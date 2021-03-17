import DummyBooks from '../commons/Data/DummyBooks';
import BaseModel from './BaseModel';

export default {
    ...BaseModel,
    items : DummyBooks,
    listByCatId: function(catId, options = {}){
        const items =   this.items.filter((item)=>{
            return item.categories.indexOf(catId) > -1;
        });
        const {limit = items.length} = options;
        return items.slice(0, limit);
    },
    listDummyFavorite: function(){
        return this.items.slice(0,3);
    }
};
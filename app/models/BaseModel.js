export default {
    items: [],
    listAll: function(){
        return this.items;
    },
    getById: function(id){
        return this.items.find(item=> item.id === id);
    }
};
Ext.define('Tutorial.store.Post',{
    extend:'Ext.data.Store',
    alias:'store.post',

    model:'TutorialApp.model.Post',

    proxy:{
        type:'ajax',
        url:'https://jsonplaceholder.typicode.com/posts',
        reader:{
            type:'json',
            rootProperty:'posts'
        }
    },
    // autoLoad:true, NB Data loaded by controller in init function
    pageSize:10
})
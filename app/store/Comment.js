Ext.define('Tutorial.store.Comment', {
    extend: 'Ext.data.Store',

    alias: 'alias.comment',

    model: 'Tutorial.model.Comment',

    proxy: {
        type: 'ajax',
        url: `https://jsonplaceholder.typicode.com/comments?postId=${localStorage.getItem('postId')}`,
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },

    // autoLoad: false, dont autoload, wait for controller
});
Ext.define('Tutorial.store.Comment', {
    extend: 'Ext.data.Store',

    alias: 'store.comment',

    model: 'Tutorial.model.Comment',

    // https://jsonplaceholder.typicode.com/comments?postId=${localStorage.getItem('postId')}
    proxy: {
        type: 'ajax',
        url: `https://jsonplaceholder.typicode.com/comments`,
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },

    // autoLoad: false, dont autoload, wait for controller
});
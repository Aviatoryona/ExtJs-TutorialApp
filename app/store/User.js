Ext.define('Tutorial.store.Users', {
    extend: 'Ext.data.Store',
    
    alias: 'store.users',
    model: 'Tutorial.model.User',

    proxy: {
        type: 'ajax',
        url: 'https://jsonplaceholder.typicode.com/users',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },
    autoLoad: true,
    pageSize: 5,
});
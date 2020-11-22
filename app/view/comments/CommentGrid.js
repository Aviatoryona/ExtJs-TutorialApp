Ext.define('Tutorial.view.comments.CommentGrid', {
    extend: 'Ext.grid.Panel',
    
    xtype : 'tutorial-commentgrid',
    store: {
        type: 'post'
    },

    controller: 'tutorial-commentgridcontroller',

    layout: 'fit',

    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        model: 'MULTI',
        type: 'checkboxmodel',
    },

    tbar: [
        {
            xtype: 'button',
            text: 'Add  Comment',
            handler: ''
        },
    ],

    columns: [
        { text: 'Post ID', dataIndex: 'id', flex: 1 },
        { text: 'User ID', dataIndex: 'userId', flex: 1 },
        { text: 'Title', dataIndex: 'title', flex: 2 },
        { text: 'Body', dataIndex: 'body', flex: 4 },
    ],

});
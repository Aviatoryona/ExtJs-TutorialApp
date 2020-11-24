Ext.define('Tutorial.view.comments.CommentGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'tutorial-commentgrid',

    store: {
        type: 'comment'
    },

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
            handler: 'onShowAddCommentBtnClick'
        },
    ],

    columns: [
        { text: 'Post ID', dataIndex: 'id', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 2 },
        { text: 'Body', dataIndex: 'body', flex: 4 },
    ],

    listeners: {
        itemkeyup: 'onKeyUpClicked'
    }

});
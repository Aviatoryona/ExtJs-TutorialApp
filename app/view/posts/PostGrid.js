Ext.define('Tutorial.view.posts.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    store: {
        type: 'post'
    },

    controller: 'tutorial-postgridcontroller',

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
            text: 'Add New Post',
            handler: function () {
                Ext.widget('tutorial-addpostform');
            }
        },
        {
            xtype: 'button',
            text: 'View Details',
            handler: 'onViewDetailsBtnClick'
        }
    ],

    columns: [
        { text: 'Post ID', dataIndex: 'id', flex: 1 },
        { text: 'User ID', dataIndex: 'userId', flex: 1 },
        { text: 'Title', dataIndex: 'title', flex: 2 },
        { text: 'Body', dataIndex: 'body', flex: 4 },
    ]
})
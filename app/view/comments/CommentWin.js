Ext.define('Tutorial.view.comments.CommentWin', {
    extend: 'Ext.Container',

    xtype: 'tutorial-commentwin',
    shadow: true,
    frame: true,
    autoShow: true,
    modal: true,
    width: 400,
    title: 'Post Comments',

    requires: [
        'Ext.window.Window'
    ],

    items: [
        {
            xtype: 'tutorial-commentgrid'
        }
    ]
});
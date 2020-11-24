Ext.define('Tutorial.view.comments.CommentWin', {
    extend: 'Ext.window.Window',

    xtype: 'tutorial-commentwin',

    shadow: true,
    frame: true,
    autoShow: true,
    modal: true,
    width: 900,
   
    bind:{
        title: '{title}',
    },

    controller: 'tutorial-commentgridcontroller',

    viewModel: {
        type: 'tutorial-commentsgridvm'
    },

    requires: [
        'Ext.window.Window'
    ],

    items: [
        {
            xtype: 'tutorial-commentgrid',
            reference: 'tutorial-commentgrid'
        }
    ]
});
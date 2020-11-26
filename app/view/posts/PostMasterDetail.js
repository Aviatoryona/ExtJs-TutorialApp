Ext.define('Tutorial.view.posts.PostMasterDetail', {
    extend: 'Ext.container.Container',

    xtype: 'postmasterdetail',

    layout: {
        type: 'border'
    },


    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    activeItem: 0,

    height: 400,
    width: '100%',

    items: [
        {

            region: 'north',
            width: '100%',
            height: 50,
            xtype: 'toolbar',
            collapsible: true,
            items: [
                {
                    text: 'Aviator'
                },
                '->',
                {
                    text: 'Post'
                }
            ]

        },

        {
            title: 'Posts',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            layout: 'fit',
            items: [{
                xtype: 'postgrid',
            }]
        },

        {
            title: 'Comments',
            region: 'east',
            floatable: false,
            margin: '5 0 0 0',
            width: 450,
            minWidth: 300,
            maxWidth: 450,
            items: [
                {
                    xtype: 'container',
                    reference: 'micontainer',
                    itemId: 'micontainer',
                    controller: 'tutorial-commentgridcontroller',

                    viewModel: {
                        type: 'tutorial-commentsgridvm'
                    },

                    items: [{
                        xtype: 'tutorial-commentgrid'
                    }]
                }
            ]
        },

    ]
});
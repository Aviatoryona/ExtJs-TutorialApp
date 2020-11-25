Ext.define('Tutorial.view.users.UserMasterDetail', {
    extend: 'Ext.container.Container',

    xtype: 'tutorial-usermasterdetail',

    layout: {
        type: 'border',
    },

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    height:800,
    width:'100%',

    items: [
    
        {
            title: 'Users',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            layout:'fit',
            items: [{
                xtype: 'usergrid',
            }]
        },

        {
            title: 'User Details',
            region: 'east',
            floatable: false,
            margin: '5 0 0 0',
            width: 450,
            minWidth: 300,
            maxWidth: 450,
            items: [

                {
                    xtype: 'tutorial-userdetailstabpanel'
                }

            ]
        },

    ]
});
Ext.define('Tutorial.view.users.UserMasterDetail', {
    extend: 'Ext.container.Container',

    xtype: 'tutorial-usermasterdetail',

    layout: {
        type: 'border',
        padding: 15,
    },

    width: '100%',

    defaults: {
        bodyPadding: '15px'
    },

    items: [
        {
            region: 'north',
            height: 75,
            xtype: 'toolbar',
            width: '100%',
            items: [
                {
                    text: 'Aviator',
                    style: {
                        'font-size': '28px',
                        'color': 'white',
                    }
                },
                '->', /*spacing */
                {
                    text: 'Users'
                },
            ]
        },

        {
            title: 'Users',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            items: [{
                xtype: 'usergrid',
            }]
        },

        {
            title: 'User Details',
            region: 'east',
            floatable: false,
            margin: '5 0 0 0',
            width: 300,
            minWidth: 300,
            maxWidth: 300,
            items: [

                {
                    xtype: 'tutorial-userdetailstabpanel'
                }

            ]
        },

    ]
});
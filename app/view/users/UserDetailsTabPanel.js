Ext.define('Tutorial.view.users.UserDetailsTabPanel', {
    extend: 'Ext.tab.Panel',

    xtype: 'tutorial-userdetailstabpanel',

    activeItem: 0,

    defaults: {
        layout: 'fit',
        bodyStyle: 'padding:5px'
    },

    items: [

        {
            title: 'Basic Info',
            items: [
                {
                    xtype: 'form',
                    itemId:'userbasicinfo',
                    items: [
                        {
                            xtype: 'tutorial-basicinfo'
                        }
                    ]
                }
            ]
        },

        {
            title: 'Address Info',
            items: [
                {
                    xtype: 'form',
                    itemId:'useraddressinfo',
                    items: [
                        {
                            xtype: 'tutorial-addressinfo'
                        }
                    ]
                }
            ]
        },

        {
            title: 'Company Info',
            items: [
                {
                    xtype: 'form',
                    itemId:'usercompanyinfo',
                    items: [
                        {
                            xtype: 'tutorial-companyinfo'
                        }
                    ]
                }
            ]
        }
    ]
});
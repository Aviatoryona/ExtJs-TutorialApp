Ext.define('Tutorial.view.users.UserDetailsTabPanel', {
    extend: 'Ext.tab.Panel',

    xtype: 'tutorial-userdetailstabpanel',

    activeItem: 0,

    items: [
        
        {
            title: 'Basic Info',
            items: [
                {
                    xtype: 'tutorial-basicinfo'
                }
            ]
        },

        {
            title: 'Address Info',
            items: [
                {
                    xtype: 'tutorial-addressinfo'
                }
            ]
        },

        {
            title: 'Company Info',
            items: [
                {
                    xtype: 'tutorial-companyinfo'
                }
            ]
        }
    ]
});
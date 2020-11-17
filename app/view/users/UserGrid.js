Ext.define('Tutorial.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'usergrid',

    controller: 'usergridcontroller',
    store: {
        type: 'users'
    },
    layout: 'fit',
    
    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        model: 'MULTI',
        type: 'checkboxmodel',
    },

    tbar: [{
            xtype: 'button',
            text: 'Add New User',
            handler: 'showFormController'
        },
        {
            xtype: 'button',
            text: 'View Details',
        }
    ],

    columns: [
        { text: 'User ID', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'UserName', dataIndex: 'username', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Street', dataIndex: 'addressStreet', hidden: true, flex: 1 },
        { text: 'Suite', dataIndex: 'addressSuite', hidden: true, flex: 1 },
        { text: 'City', dataIndex: 'address.city', hidden: true, flex: 1 },
        { text: 'ZipCode', dataIndex: 'address.zipcode', hidden: true, flex: 1 },
        { text: 'Latitude', dataIndex: 'lat', hidden: true, flex: 1 },
        { text: 'Longitude', dataIndex: 'lng', hidden: true, flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Website', dataIndex: 'website', flex: 1 },
        { text: 'Company Name', dataIndex: 'companyName', flex: 1 },
        { text: 'Company Catch Phrase', dataIndex: 'companyCatchPhrase', hidden: true, flex: 1 },
        { text: 'Company Bs', dataIndex: 'companyBs', hidden: true, flex: 1 },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
    listeners: {
        select: 'onItemSelected'
    }
});
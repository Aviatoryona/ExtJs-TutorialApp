Ext.define('Tutorial.view.users.AddressInfo', {
    extend: 'Ext.form.FieldSet',

    xtype: 'tutorial-addressinfo',

    title: 'Address Info',

    items: [

        {
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'textfield',
                allowBlank: false
            },
        
            items: [
                {
                    fieldLabel: 'Street',
                    name: 'address.street',
                },
                {
                    fieldLabel: 'Suite',
                    name: 'address.suite',
                    margin:'0 10'
                },
                {
                    fieldLabel: 'City',
                    name: 'address.city',
                },
            ]

        },
        
        {
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'textfield',
                allowBlank: false
            },
        
            items: [
                {
                    fieldLabel: 'Zipcode',
                    name: 'address.zipcode',
                    xtype: 'textfield',
                },
                {
                    fieldLabel: 'Latitude',
                    name: 'address.geo.lat',
                    margin:'0 10'
                },
                {
                    fieldLabel: 'Longitude',
                    name: 'address.geo.lng',
                },
            ]

        },

        {
            fieldLabel: 'Website',
            xtype: 'textfield',
            name: 'website',
            width: '100%',
        },


    ]
});
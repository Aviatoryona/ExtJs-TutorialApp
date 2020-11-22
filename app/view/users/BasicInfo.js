Ext.define('Tutorial.view.users.BasicInfo', {
    extend: 'Ext.form.FieldSet',

    xtype: 'tutorial-basicinfo',

    title: 'Personal Info',

    items: [

        {
            fieldLabel: 'User ID',
            xtype: 'numberfield',
            name: 'id',
            width: '99%',
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
                    fieldLabel: 'Username ',
                    name: 'username',
                    width: '50%',
                    margin:'0 10'
                },
                {
                    fieldLabel: 'Name',
                    name: 'name',
                    width: '50%',
                    margin:'0 10'
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
                    fieldLabel: 'Email',
                    name: 'email',
                    width: '50%',
                    margin:'0 10'
                },
                {
                    fieldLabel: 'Phone',
                    name: 'phone',
                    width: '50%',
                    margin:'0 10'
                },
            ]

        },

    ]
});
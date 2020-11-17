Ext.define('Tutorial.view.users.AddUserForm', {
    extend: 'Ext.window.Window',

    // Uncomment to give this component an xtype 
    xtype: 'tutorial-adduserform',

    frame: true,
    shadow: true,
    width: 400,
    autoshow: true,
    modal: true,

    // controller: 'tutorial-adduserformcontroller',

    requires: [
        'Ext.window.Window'
    ],

    items: [
        {
            xtype: 'form',
            layout: 'form',
            reference: 'miform',
            defaults: {
                xtype: 'textfield',
                allowBlank: false
            },

            items: [
                {
                    fieldLabel: 'User ID',
                    xtype: 'numberfield',
                    name: 'id',
                },
                {
                    fieldLabel: 'Username ',
                    name: 'username',
                },
                {
                    fieldLabel: 'Name',
                    name: 'name',
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                },
                {
                    fieldLabel: 'Phone',
                    name: 'phone',
                },
                {
                    fieldLabel: 'Website',
                    name: 'website',
                },
                {
                    fieldLabel: 'Company Name',
                    name: 'company.name',
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    formBind: true,
                    handler: 'onAddUserFormSubmit'
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        this.getView().destroy();
                    }
                }
            ]
        }
    ]
});
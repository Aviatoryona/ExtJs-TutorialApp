Ext.define('Tutorial.view.users.AddUserForm', {
    extend: 'Ext.window.Window',

    // Uncomment to give this component an xtype 
    xtype: 'tutorial-adduserform',
    shadow: true,
    frame: true,
    autoShow: true,
    modal: true,
    width: 400,
    scrollable: true,
    layout:'fit',
    title: 'Add User',

    controller: 'tutorial-adduserformcontroller',

    requires: [
        'Ext.window.Window'
    ],

    items: [
        {
            xtype: 'form',
            layout: 'form',
            reference: 'myform',

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
                    handler: 'onCancelBtnClick'
                }
            ]
        }
    ]
});
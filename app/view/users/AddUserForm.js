Ext.define('Tutorial.view.users.AddUserForm', {
    extend: 'Ext.window.Window',

    // Uncomment to give this component an xtype 
    xtype: 'tutorial-adduserform',
    shadow: true,
    frame: true,
    autoShow: true,
    modal: true,
    width: 900,
    scrollable: true,
    layout: 'fit',
    title: 'Add User',

    controller: 'tutorial-adduserformcontroller',


    requires: [
        'Ext.window.Window'
    ],

    items: [
        {
            xtype: 'form',
            layout: 'column',
            reference: 'myform',
            
            items: [

                {
                    xtype: 'container',
                    columnWidth: 0.5,
                    padding: 10,
                    items: [

                        {
                            xtype: 'tutorial-basicinfo',
                        }

                    ]

                },

                {
                    xtype: 'container',
                    columnWidth: 0.5,
                    padding: 10,
                    items: [

                        {
                            xtype: 'tutorial-addressinfo',
                        },

                        {
                            xtype: 'tutorial-companyinfo',
                        },

                    ]

                },

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
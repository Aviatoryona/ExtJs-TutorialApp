Ext.define('Tutorial.view.posts.AddPostForm', {
    extend: 'Ext.window.Window',

    // Uncomment to give this component an xtype 
    xtype: 'tutorial-addpostform',
    shadow: true,
    frame: true,
    autoShow: true,
    modal: true,
    width: 400,
    title: 'Add Post',

    controller: 'tutorial-addpostformcontroller',

    requires: [
        'Ext.window.Window'
    ],

    items: [
        {
            itemId: 'myFormId',
            xtype: 'form',
            layout: 'form',
            reference: 'addpostform',

            defaults: {
                xtype: 'textfield',
                allowBlank: false
            },

            items: [
                {
                    xtype: 'displayfield',
                    name: 'id',
                    hidden: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'User ID',
                    name: 'userId',
                },
                {
                    fieldLabel: 'Title',
                    name: 'title',
                },
                {
                    fieldLabel: 'Body',
                    xtype: 'textarea',
                    name: 'body'
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    formBind: true,
                    handler: 'onSaveBtnClick'
                },
                {
                    text: 'Cancel',
                    handler: 'onCancelBtnClick',
                }
            ]
        }
    ]
});
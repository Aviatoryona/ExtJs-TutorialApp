Ext.define('Tutorial.view.comments.AddComment', {
    extend: 'Ext.window.Window',

    xtype: 'tutorial-addcomment',

    shadow: true,
    frame: true,
    autoShow: true,
    modal: true,
    width: 400,
    title: 'Add Comment',

    controller: 'tutorial-addcommentformcontroller',

    requires: [
        'Ext.window.Window'
    ],

    items: [
        {
            itemId: 'myFormId',
            xtype: 'form',
            layout: 'form',
            reference: 'addcommentform',

            defaults: {
                xtype: 'textfield',
                allowBlank: false
            },

            items: [
                {
                    name: 'id',
                    hidden: true
                },
                {
                    name: 'postId',
                    hidden: true
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
                    handler: 'closeForm',
                }
            ]
        }
    ]
});
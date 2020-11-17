Ext.define('Tutorial.view.users.AddUserForm', {
    extend: 'Ext.window.Window',

    // Uncomment to give this component an xtype 
    xtype : 'tutorial-adduserform', 
    frame:true,
    shadow:true,
    width:400,
    autoshow:true,
    modal:true,

    requires:[
        'Ext.window.window'
    ],

    items: [
        {
            xtype: 'form',
            layout: 'form',
            defaults: {
                xtype: 'textfield',
                allowBlank: false
            },

            items: [
                {
                    fieldLabel: 'User ID',
                    xtype: 'numberfield'
                },
                {
                    fieldLabel: 'Username ',  
                },
                {
                    fieldLabel: 'Name',  
                },
                {
                    fieldLabel: 'Email',  
                },
                {
                    fieldLabel: 'Phone',  
                },
                {
                    fieldLabel: 'Website',  
                },
                {
                    fieldLabel: 'Company Name',  
                }
            ],
            buttons:[
                {
                    text:'Save',
                    formBind:true,
                    handler:''
                },{
                    text:'Cancel',
                    handler:function(){
                        this.getView().destroy();
                    }
                }
            ]
        }
    ]
});
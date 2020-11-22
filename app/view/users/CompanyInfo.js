Ext.define('Tutorial.view.users.CompanyInfo', {
    extend: 'Ext.form.FieldSet',

    xtype: 'tutorial-companyinfo',

    title: 'Company Info',


    items: [

        {

            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    fieldLabel: 'Company Name',
                    name: 'company.name',
                    width: '50%',
                    xtype: 'textfield',
                },

                {
                    xtype: 'textfield',
                    fieldLabel: 'Bs.',
                    name: 'company.bs',
                    width: '50%',
                    margin:'0 10'
                }
            ]

        },

        {
            xtype: 'textarea',
            fieldLabel: 'Catch Phrase',
            name: 'company.catchPhrase',
            width: '99%',
        },

       
    ]
});
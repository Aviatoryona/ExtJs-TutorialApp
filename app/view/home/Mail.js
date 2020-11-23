Ext.define('Tutorial.view.home.Mail', {
    extend: 'Ext.Panel',

    xtype: 'tutorial-mail',
    title: 'Mail',


    items: [
        {
            xtype: 'treepanel',
            itemId:'tree-tn',
            border:false,
            autoScroll:false,
            

        }
    ]
});
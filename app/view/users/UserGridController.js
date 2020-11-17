Ext.define('Tutorial.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',
    
    init: function() {

    },

    onAddUserButtonClick: function() {
        Ext.create({
            xtype: 'userform'
        });
    },

    onViewUserDetailsButtonClick: function() {

    }
})
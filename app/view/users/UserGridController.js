Ext.define('Tutorial.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',
    
    init: function() {

    },

    showFormController:function(){
          Ext.widget('tutorial-adduserform');
    },

    onViewUserDetailsButtonClick: function() {

    }
})
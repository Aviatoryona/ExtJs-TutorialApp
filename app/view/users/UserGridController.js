Ext.define('Tutorial.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',

    init: function () {
        var me = this;
        me.getView().getStore().load();
    },

    mixins:[
        'Tutorial.view.mixins.GridMixin'
    ],

    showFormController: function () {
        Ext.widget('tutorial-adduserform');
    },

    onViewDetailsBtnClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            console.log(record);
            var winContainer = Ext.widget('tutorial-adduserform');
            winContainer.lookupReference('myform').getForm().loadRecord(record);
        }
    },

});
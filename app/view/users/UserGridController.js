Ext.define('Tutorial.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',

    init: function () {
        var me = this;
        me.getView().getStore().load();
    },

    mixins: [
        'Tutorial.view.mixins.GridMixin'
    ],

    showFormController: function () {
        Ext.widget('tutorial-adduserform');
    },

    //the record will be mapped to the form and form displayed
    onViewDetailsBtnClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            console.log(record);
            var winContainer = Ext.widget('tutorial-adduserform');
            winContainer.lookupReference('myform').getForm().loadRecord(record);
        }
    },

    //the record will be populated in respective forms in a tabPanel
    onItemSelected: function (rowModel, record, index, eOpts) {
        var form = Ext.ComponentQuery.query('tutorial-userdetailstabpanel #userbasicinfo')[0].getForm();
        form.loadRecord(record)
        form = Ext.ComponentQuery.query('tutorial-userdetailstabpanel #useraddressinfo')[0].getForm();
        form.loadRecord(record)
        form = Ext.ComponentQuery.query('tutorial-userdetailstabpanel #usercompanyinfo')[0].getForm();
        form.loadRecord(record)
    }

});
Ext.define('Tutorial.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',

    init: function () {
        var me = this;
        me.getView().getStore().load();
    },

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

    getSelectedRecord: function () {
        var me = this;
        var record = me.getSelectedRecords();
        if (record) {
            return record[0];
        }
    },

    getSelectedRecords: function () {
        var me = this;
        var records = me.getView().getSelectionModel().getSelection();
        if (records[0]) {
            return records;
        } else {
            Ext.Msg.alert('Sorry!!', 'Please select a record from the list');
        }
    }
});
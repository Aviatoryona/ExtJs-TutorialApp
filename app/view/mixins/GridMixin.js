Ext.define('Tutorial.view.mixins.GridMixin',{

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
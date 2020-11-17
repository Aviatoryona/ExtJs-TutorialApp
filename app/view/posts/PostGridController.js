Ext.define('Tutorial.view.posts.PostGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tutorial-postgridcontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        this.getView().getStore().load();
    },

    onViewDetailsBtnClick: function () {
        var me = this;
        var record = me.getSelectedRecords();
        if(record){
            console.log(record);

            
        }
    },

    getSelectedRecords: function () {
        var me = this;
        var records = me.getView().getSelectionModel().getSelection();
        if (records[0]) {
            return records[0];
        } else {
            Ext.Msg.alert('Sorry!!', 'Please select a record from the list');
        }
    }

});
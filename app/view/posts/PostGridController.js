Ext.define('Tutorial.view.posts.PostGridController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.tutorial-postgridcontroller',

    mixins:[
        'Tutorial.view.mixins.GridMixin'
    ],

    /**
     * Called when the view is created
     */
    init: function () {
        this.getView().getStore().load();
    },

    onViewDetailsBtnClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            console.log(record);
            var winContainer = Ext.widget('tutorial-addpostform');
            winContainer.lookupReference('addpostform').getForm().loadRecord(record);
        }
    }, 

});
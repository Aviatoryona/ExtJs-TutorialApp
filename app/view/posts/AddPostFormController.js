Ext.define('Tutorial.view.posts.AddPostFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tutorial-addpostformcontroller',
    /**
     * Called when the view is created
     */
    init: function () { },

    onSaveBtnClick: function () {
        var me = this;
        var win = me.getView().lookupReference('addpostform').getForm();
        console.log(win.getValues());
    },

    onCancelBtnClick: function () {
        this.getView().destroy();
    }


});
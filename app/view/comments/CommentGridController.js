Ext.define('Tutorial.view.comments.CommentGridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tutorial-commentgridcontroller',

    init: function () {
        this.getView().getStore().load();
    }

});
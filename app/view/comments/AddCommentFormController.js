Ext.define('Tutorial.view.comments.AddCommentFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tutorial-addcommentformcontroller',

    init: function () { },

    closeForm: function () {
        this.getView().destroy();
    },

    onSaveBtnClick: function () {
        var me = this;
        var fom = me.getView().lookupReference('addcommentform').getForm();
        var id=fom.findField('id').getValue();

        if(id){
            me.addData.call();
        }else{
            me.updateData.call();
        }

    },

    addData: function () {
        // fom.submit({

        // });
        Ext.Msg.alert("add data");
    },

    updateData: function () {
        Ext.Msg.alert("update data");
    },


});
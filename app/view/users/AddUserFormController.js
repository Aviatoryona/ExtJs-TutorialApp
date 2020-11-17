Ext.define('Tutorial.view.users.AddUserFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tutorial-adduserformcontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    onAddUserFormSubmit:function(){
        var me=this;
        form=me.getView().lookupReference('myform').getForm();

        console.log(form.getValues());
    },
    
    onCancelBtnClick: function () {
        this.getView().destroy();
    },
    
});
Ext.define('Tutorial.view.posts.AddPostFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tutorial-addpostformcontroller',
    /**
     * Called when the view is created
     */
    init: function () { },

    onSaveBtnClick: function () {
        var me = this;
        var fom = me.getView().lookupReference('addpostform').getForm();
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

    onCancelBtnClick: function () {
        this.getView().destroy();
    },

    sampleOnSubmitFom: function () {
        var cmp = Ext.ComponentQuery.query('tutorial-addpostform')[0];
        console.log(cmp);

        var form = cmp.lookupReference('addpostform').getForm();

        var userId = form.findField('userId').getValue();
        var title = form.findField('title').getValue();
        var body = form.findField('body').getValue();


        var myObject = {
            "userId": userId,
            "title": title,
            "body": body
        }

        console.log(JSON.stringify(myObject));

        Ext.Ajax.request({
            url: 'https://jsonplaceholder.typicode.com/users',

            success: function (resp, opts) {
                console.log(resp.responseText);
            },

            failure: function (resp, opts) {
                console.log(resp.responseText);
            }
        });
    }


});
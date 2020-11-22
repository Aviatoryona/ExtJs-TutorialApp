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
        // this.getView().destroy();
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

        // form.submit({
        //     url:'./',
        //     success:function(fom,action){
        //         console.log(action);
        //     },
        //     failure:function(fom,action) {
        //         console.log(action);
        //     }
        // });

    },


});
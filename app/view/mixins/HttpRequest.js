Ext.define('Tutorial.view.mixins.HttpRequest', {

    http: function () {
        var me = this;
        var metod = me.method;
        var json = me.data;
        var callBack = me.callBack;

        Ext.Ajax.request({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: metod,

            success: function (resp, opts) {
                console.log(resp.responseText);
                callBack(resp);
            },

            failure: function (resp, opts) {
                console.log(resp.responseText);
                callBack(resp);
            }
        });
    }


    // myFormPanel.getForm().submit({
    //     clientValidation: true,
    //     url: 'updateConsignment.php',
    //     params: {
    //         newStatus: 'delivered'
    //     },
    //     success: function(form, action) {
    //        Ext.Msg.alert('Success', action.result.msg);
    //     },
    //     failure: function(form, action) {
    //         switch (action.failureType) {
    //             case Ext.form.action.Action.CLIENT_INVALID:
    //                 Ext.Msg.alert(
    //                     'Failure',
    //                     'Form fields may not be submitted with invalid values'
    //                 );
    //                 break;
    //             case Ext.form.action.Action.CONNECT_FAILURE:
    //                 Ext.Msg.alert('Failure', 'Ajax communication failed');
    //                 break;
    //             case Ext.form.action.Action.SERVER_INVALID:
    //                Ext.Msg.alert('Failure', action.result.msg);
    //        }
    //     }
    // });

});
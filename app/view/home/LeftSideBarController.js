Ext.define('Tutorial.view.home.LeftSideBarController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tutorial-leftsidebarcontroller',

    mixins: [
        'Tutorial.view.mixins.Miscellaneous'
    ],

    init: function () { },

    onItemClick: function (sender, info, eOpts) {
        console.log(info.item._text);

        if ((info.item._text) == 'detention') {
            Ext.getCmp('panelBody').add({
                xtype: 'usergrid'
            })
        } else {
            this.showAlertMsg('Sorry', 'No such item found');
        }
    }


});
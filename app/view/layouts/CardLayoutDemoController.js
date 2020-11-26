Ext.define('Tutorial.view.layouts.CardLayoutDemoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cardlayoutdemocontroller',

    init: function () { },

    onNextClick: function (btn, e, opts) {
        var me = this,
            view = me.getView(),
            panel = view.lookupReference('mipanel');

        me.navigate(panel, 'next');
    },

    onPrevClick: function (btn, e, opts) {
        var me = this,
            view = me.getView(),
            panel = view.lookupReference('mipanel');

        me.navigate(panel, 'prev');

    },

    navigate: function (panel, direction) {
        var layout = panel.getLayout();
        layout['direction']();

        Ext.getComponentQuery.query('panel #move-prev')[0].setDisabled(!layout.getPrev());
        Ext.getComponentQuery.query('panel #move-next')[0].setDisabled(!layout.getNext());

        //using id not itemId
        // Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
        // Ext.getCmp('move-next').setDisabled(!layout.getNext());
    }

});
Ext.define('Tutorial.view.posts.PostGridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tutorial-postgridcontroller',

    mixins: [
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

    onItemSelected: function () {
        Ext.create({
            xtype: 'window',
            shadow: true,
            autoShow: true,
            width: 200,
            modal: true,
            frame: true,
            closable: true,

            items: [
                {
                    xtype: 'radiogroup',
                    height: 100,
                    vertical: true,
                    items: [

                        {
                            boxLabel: 'View comments',
                            checked: false,
                            inputValue: 'View',
                            name: 'opt'
                        },

                        {
                            boxLabel: 'Add comment',
                            checked: false,
                            inputValue: 'Add',
                            name: 'opt'
                        }

                    ],
                    listeners: {
                        change: function (inputField, newValue, oldValue, eOpts) {
                            alert(newValue);
                            if (newValue == 'View') {
                                this.getView().destroy();
                            } else {

                            }

                        }
                    }

                }
            ]

        });
    }

});
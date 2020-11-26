Ext.define('Tutorial.view.posts.PostGridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tutorial-postgridcontroller',

    mixins: [
        'Tutorial.view.mixins.GridMixin',
        'Tutorial.view.mixins.Miscellaneous'
    ],

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


    //used in PostMasterDetail
    onItemSelected: function (grid, record, index, eOpts) {
        var me = this,
            view = me.getView();

        var container = Ext.ComponentQuery.query('postmasterdetail #micontainer')[0]; //view.lookupReference('micontainer');
        var viewModel = container.getViewModel();
        viewModel.set('postId', record.get('id'));
        viewModel.notify();
        container.getController().load();
    },

    /**/
    onItemSelected1: function () {
        var me = this;
        Ext.create({
            xtype: 'window',
            shadow: true,
            autoShow: true,
            width: 200,
            modal: true,
            frame: true,
            closable: true,
            title: 'Post',

            items: [
                {
                    xtype: 'radiogroup',
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
                            if (newValue.opt == 'View') {
                                // this.getView().destroy();
                                var record = me.getSelectedRecord();
                                localStorage.setItem('postId', record.get('id'));
                                Ext.create({
                                    xtype: 'tutorial-commentwin',  /* show all comments  */
                                    viewModel: {
                                        data: {
                                            title: `${record.get('title').toUpperCase()}`,
                                            postId: record.get('id'),
                                        }
                                    }
                                });

                            } else {
                                // this.getView().destroy();
                                Ext.create({
                                    xtype: 'tutorial-addcomment'  /* show add comment form */
                                });
                            }

                        }
                    }

                }
            ]

        });
    }

});
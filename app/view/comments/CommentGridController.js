Ext.define('Tutorial.view.comments.CommentGridController', {
    extend: 'Ext.app.ViewController',


    mixins: [
        'Tutorial.view.mixins.GridMixin',
        'Tutorial.view.mixins.Miscellaneous',
    ],

    alias: 'controller.tutorial-commentgridcontroller',

    init: function () {
        this.getView().getStore().load();
    },

    onShowAddCommentBtnClick: function () {
        Ext.create({
            xtype: 'tutorial-addcomment'
        });
    },

    onKeyUpClicked: function (grid, record, item, index, e, eOpts) {
        var me=this;
        if (e.getKey() == e.DELETE) {
            if(record){
                console.log(record.data.body);
                me.showAlertMsg('Wow','Record found');
            }else{
                me.showAlertMsg('Sorry','Please select a record');
            }
        }
    }

});
Ext.define('Tutorial.viewmodel.CommentsGridVM', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.tutorial-commentsgridvm',

    stores: {
        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:
        users: {
            model: 'User',
            autoLoad: true
        }
        */
    },
    data: {
        postId: null,
        title: null
    }
});
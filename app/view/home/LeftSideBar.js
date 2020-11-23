Ext.define('Tutorial.view.home.LeftSideBar', {
    extend: 'Ext.panel.Panel',

    xtype: 'tutorial-leftsidebar',

    layout: {
        type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },

    defaults: {
        bodyStyle: 'padding:15px'
    },

    items: [
        {
            title: 'Panel 1',
            html: 'Panel content!'
        },
        {
            title: 'Panel 2',
            html: 'Panel content!'
        },
        {
            title: 'Panel 3',
            html: 'Panel content!'
        }
    ]
});
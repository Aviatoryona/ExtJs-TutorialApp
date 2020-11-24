Ext.define('Tutorial.view.home.LeftSideBar', {
    extend: 'Ext.panel.Panel',

    xtype: 'tutorial-leftsidebar',

    layout: {
        type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },

    controller: 'tutorial-leftsidebarcontroller',

    defaults: {
        bodyStyle: 'padding:15px'
    },

    items: [
        {
            title: 'Users',
            items: [
                {
                    xtype: 'treelist',
                    store: {
                        root: {
                            expanded: true,
                            children: [
                                {
                                    text: 'detention',
                                    leaf: true,
                                    iconCls: 'x-fa fa-frown-o'
                                }, 
                                {
                                    text: 'homework',
                                    expanded: true,
                                    iconCls: 'x-fa fa-folder',
                                    children: [
                                        {
                                            text: 'book report',
                                            leaf: true,
                                            iconCls: 'x-fa fa-book'
                                        },
                                        {
                                            text: 'algebra',
                                            leaf: true,
                                            iconCls: 'x-fa fa-graduation-cap'
                                        }
                                    ]
                                },
                                {
                                    text: 'buy lottery tickets',
                                    leaf: true,
                                    iconCls: 'x-fa fa-usd'
                                }
                            ]
                        }
                    },
                    listeners: {
                        itemclick: 'onItemClick'
                    }
                }
            ]
        },
        {
            title: 'Panel 2',
            html: 'Panel content 2!'
        },
        {
            title: 'Panel 3',
            html: 'Panel content 3!'
        }
    ]
});
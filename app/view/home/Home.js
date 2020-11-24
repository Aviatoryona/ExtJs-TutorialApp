Ext.define('Tutorial.view.home.Home', {

    extend: 'Ext.container.Viewport',

    xtype: 'tutorial-home',

    layout: 'border',
    maximized: true,
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [{
        region: 'south',
        height: 50,
        minHeight: 50,
        maxHeight: 75,
        xtype: 'container',
        style: {
            'display': 'flex',
            'align-items': 'center',
            'text-align': 'center'
        },
        items: [
            {
                html: '<p>&copy; Aviator 2020</p>'
            }
        ]
    },
    {
        region: 'north',
        height: 50,
        minHeight: 50,
        maxHeight: 75,
        xtype: 'container',
        width: '100%',
        items: [
            {
                xtype: 'toolbar',
                style: {
                    'background-color': 'white',
                },
                items: [
                    {
                        text: 'Aviator',
                        style: {
                            'font-size': '28px',
                            'color': 'white',
                        }
                    },
                    '->', /*spacing */
                    {
                        text: 'Users'
                    },
                    '-', /*vertical separator */
                    {
                        text: 'Posts'
                    },
                    '-',
                    {
                        xtype: 'textfield',
                        emptyText: 'Search...'
                    }
                ]
            }
        ]
    },
    {
        region: 'west',
        floatable: false,
        margin: '5 0 0 0',
        width: 256,
        minWidth: 100,
        maxWidth: 256,
        items: [
            {
                xtype: 'tutorial-leftsidebar'
            }
        ]
    },
    {
        title: 'Main Content',
        collapsible: false,
        region: 'center',
        margin: '5 0 0 0',
        items: [{
            xtype: 'panel',
            itemId:'panelBody'
        }]
    },
    {
        title: 'Navigation',
        region: 'east',
        floatable: false,
        margin: '5 0 0 0',
        width: 125,
        minWidth: 100,
        maxWidth: 250,
        html: '<p>Latest News</p>'
    },
    ]
});
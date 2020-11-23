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
        title: 'Footer',
        region: 'south',
        height: 100,
        minHeight: 75,
        maxHeight: 150,
        html: '<p>&copy; Aviator 2020</p>'
    },
    {
        region: 'north',
        height: 100,
        minHeight: 75,
        maxHeight: 100,
        items: [
            {
                xtype: 'toolbar',
                items: [
                    {
                        text: 'Aviator',
                        style: {
                            'font-size': '24px',
                            'color': 'white',
                        }
                    },
                    '->', /*spacing */
                    {
                        text: 'Users'
                    },
                    '-', /*vertical separator */
                    {
                        text: 'Users'
                    },
                    {
                        xtype: 'textfield',
                        style: {
                            'border': '1px solid white'
                        },
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
            items: [
                {
                    html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
                }
            ]
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
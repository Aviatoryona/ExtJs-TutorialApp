Ext.define('Tutorial.view.layouts.CardLayoutDemo', {
    extend: 'Ext.window.Window',

    autoShow: true,
    width: 500,
    frame: true,
    shadow: true,

    controller: 'cardlayoutdemocontroller',
    title: 'Wizard',

    xtype: 'cardlayoutdemo',

    items: [
        {
            xtype: 'panel',
            reference: 'mipanel',
            layout: 'card',
            width: 500,
            height: 200,
            bodyStyle: 'padding:15px',
            defaults: {
                border: false
            },
            items: [
                {
                    id: 'card-0',
                    html: '<h3>Welcome now</h3>'
                },
                {
                    id: 'card-1',
                    html: '<h3>Hi there</h3>'
                },
                {
                    id: 'card-2',
                    html: '<h3>Get started</h3>'
                },
                {
                    id: 'card-3',
                    html: '<h3>Bye</h3>'
                }
            ],
            buttons: [
                {
                    text: '< Prev',
                    disabled: true,
                    handler: 'onPrevClick',
                    itemId: 'move-prev'
                },
                '->',   //tbfill
                {
                    text: 'Next >',
                    handler: 'onNextClick',
                    itemId: 'move-next'
                }
            ]
        }
    ]
});
//todo
//embed a progress bar
// validation of forms, email, url, password , date range
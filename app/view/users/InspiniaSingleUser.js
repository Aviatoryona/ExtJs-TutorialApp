Ext.define('Tutorial.view.users.InspiniaSingleUser', {
    extend: 'Ext.container.Container',

    xtype: 'tutorial-inspiniasingleuser',

    layout: {
        type: 'column'
    },
    width: 300,
    height: 180,

    border: 1,
    style: {
        backgroundColor: '#ffffff',
        border: '1px solid #e7eaec',
        padding: '20px',
        marginBottom: '20px',
        fontSize: '13px',
        fontFamily: `"open sans", "Helvetica Neue", Helvetica, Arial, sans-serif`
    },

    defaults: {
        xtype: 'container'
    },

    items: [
        // column1
        {
            layout: 'vbox',
            columnWidth: 0.4,
            items: [
                {
                    xtype: 'image',
                    height: 60,
                    width: 60,
                    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    style: {
                        borderRadius: '50%',
                        marginTop: '20px',
                    }
                },
                {
                    html: '<strong>Software <br> Engineer</strong>',
                    style: {
                        textAlign: 'center',
                        fontWeight: '600',
                        'font-size': '11px',
                        color: '#676a6c',
                    }
                }
            ]
        },

        // column2
        {
            columnWidth: 0.6,
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    html: '<strong>Yonathaniel K</strong><br><p><i class="x-fa fa-map-marker"></i> Riviera State 32/106</p>',
                },
                {
                    html: `<address>
                        <strong>Twitter, Inc.</strong><br>
                        795 Folsom Ave, Suite 600<br>
                        San Francisco, CA 94107<br>
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                     </address>`,
                    style: {
                        'margin-bottom': '1rem',
                        'font-style': 'normal',
                        'line-height': 'inherit',
                    }
                }
            ]
        }
    ]
});
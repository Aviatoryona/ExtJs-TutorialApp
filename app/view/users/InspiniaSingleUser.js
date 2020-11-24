Ext.define('Tutorial.view.users.InspiniaSingleUser', {
    extend: 'Ext.container.Container',

    xtype: 'tutorial-inspiniasingleuser',

    layout: {
        type: 'column'
    },
    width: 364,
    height: 283,

    border: 1,

    style: {
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: '1px'
    },


    defaults: {
        bodyPadding: '15px',
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
                        borderRadius: '50%'
                    }
                },
                {
                    text: 'Software Engineer',
                    style: {
                        textAlign: 'center',
                        fontWeight: '600'
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
                    text: 'Yonathaniel K',
                    style: {
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '24px'
                    },

                },
                {
                    xtype: 'splitter'
                },
                {
                    html: `<p><i class="x-fa fa-map-marker"></i> Riviera State 32/106</p>`
                },
                {
                    xtype: 'splitter'
                },

                {
                    text: 'Twitter, Inc',
                    style: {
                        textAlign: 'center',
                        fontWeight: '600'
                    }
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
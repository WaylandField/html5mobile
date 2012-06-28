Ext.define('Kitchensink.view.tablet.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',

    requires: [
        'Ext.dataview.NestedList',
        'Ext.navigation.Bar',
        'Kitchensink.view.RoleView',
		'Kitchensink.view.CanvasView'
    ],

    config: {
        fullscreen: true,

        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },

        items: [
            {
                id: 'mainNavigationBar',
                xtype : 'titlebar',
                docked: 'top',
                title : 'Eagle Eyes - Team Career Growth In-depth',
            },
            {
                id: 'launchscreen',
                cls : 'container',
                items: [
					{
					    xtype : 'canvas'
					}
                ]
            }
        ]
    }
});



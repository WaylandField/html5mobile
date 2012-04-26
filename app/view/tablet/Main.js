Ext.define('Kitchensink.view.tablet.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',

    requires: [
        'Ext.dataview.NestedList',
        'Ext.navigation.Bar'
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
                title : 'Development',
                items: [
                {
                	xtype : "searchfield",
                	placeHolder : "Username",
                	name : "searchField"
                },
                {
                    xtype : 'button',
                    id: 'viewSourceButton',
                    align : 'right',
                    ui    : 'action',
                    action: 'viewSource',
                    text  : 'Source'
                },
                {
                    xtype : 'selectfield',
                    id: 'template',
                    align : 'right',
                    text  : 'Source',
                    options : [{"text":"Development Goal Plan for Rick 2011", value:2}, {"text":"Development Plan for hike 2012", value:3}]
                }]
            },
            {
                id: 'launchscreen',
                cls : 'card',
                scrollable: true,
                html: "<img src='http://www.51pptmoban.com/d/file/2012/04/08/fe98752728f881eb346b80fd8d328b54.jpg'>"
            },
            {
                id: 'reportsNavi',
                xtype : 'list',
                docked: 'left',
                itemTpl : "<div class='rpt_cls'><div class='photo'><div class='photo_cover'><img src='{photo}' height='65'></div></div>"
                		 +"<div class='rpt_info'><div class='rpt_name'>{fullname}</div><div class='rpt_title'>{title}</div></div></div>",
                width : 220,
                store: 'Reports'
            }
        ]
    }
});

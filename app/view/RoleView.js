Ext.define('Kitchensink.view.RoleView', {
    extend: 'Ext.Container',
    xtype: 'roleView',
    requires : ['Kitchensink.view.UserSlider','Kitchensink.view.RoleChart'],
    config :{
	
	    layout: {
	        type: 'hbox',
	        align: 'stretch'
	    },
	    items: [
	            {
	                xtype : 'roleChart',
	                flex: 1,
	                width:790,
	                align:'center'
	            },
	            {
	                id: 'userArea',
	                xtype : 'userSlider',
	                flex: 2,
	                width:230
	            }
	        ]
    }
});
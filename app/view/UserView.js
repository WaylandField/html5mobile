Ext.define('Kitchensink.view.UserView', {
    extend: 'Ext.Container',
    xtype: 'userView',
    requires : ['Kitchensink.view.TimeChart', 'Kitchensink.view.UserChart'
                ,'Kitchensink.view.PromoteDetailView','Kitchensink.view.UserDetailView'],
    config :{
	    layout: {
	        type: 'hbox',
	    },
	    items: [
	            {	xtype : 'tabpanel',
	            	tabBarPosition: 'bottom',
	            	ui: 'light',
	                flex: 1,
	                height:700,
	            	items: [
		            	        {
						            title: 'Readiness',
						            iconCls : 'user',
						            scrollable: false,
						            items : [{
						            	xtype : 'panel',
					            		layout :{
					            			type : 'hbox'
					            		},
						            	items : [{
						            				xtype: 'userChart',
						            				flex : 1,
						            				width: 700
						            			},
						        	            {
						        	            	xtype: 'userDetailView',
						        	            	width:320,
						        	            	flex : 2
						        	            }
						            		]
						            	}
						            ]
						        },{
						            title: 'Grow Path',
						            iconCls : 'time',
						            scrollable: false,
						            items : [{
						            	xtype : 'panel',
					            		layout :{
					            			type : 'hbox'
					            		},
						            	items : [{
						            				xtype: 'timeChart',
						            				flex : 1,
						            				width: 700
						            			},
						        	            {
						        	            	xtype: 'promoteDetailView',
						        	            	width:320,
						        	            	flex : 2
						        	            }
						            		]
						            	}
						            ]
						        }
				        ]
	            }
	        ]
    }
});
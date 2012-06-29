
Ext.define('Kitchensink.view.UserSlider', {
    extend: 'Ext.Container',
    xtype: 'userSlider',
    requires: [
               'Kitchensink.store.UserListStore'
               ],
    config :{
		items: [
	            {
	            	xtype: 'list',
	            	ui:'round',
	            	grouped:true,
	            	height:700,
	                store: 'UserListStore',
	                itemTpl: "<div class='rpt_cls'><div class='color' style='background-color:{color}'></div>"
               		 +"<div class='user'>{firstName} {lastName}<span class=\"ready\">{ready}</span></div>",
               		listeners: {
	            		itemtap: function(listObj, index,itmObj,storeItm, e, opts){
		            		document.location = "http://localhost/mobile/#user/"+index;
		            	}
		            }
	            
	            }
	        ]
	}
});
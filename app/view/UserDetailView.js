Ext.define('Kitchensink.view.UserDetailView', {
    extend: 'Ext.Container',
    xtype: 'userDetailView',
    config :{
		layout: {
			type: 'vbox',
		},
	    items :[
					{		xtype : 'panel',
					        html: '<li class="skill">Competencies and Learning Details<ul> <li>Technique Skills<ul><li>JUIC programming 123</li><li class="completed">SCA programming 123</li><li class="completed">Oracle DB 123</li></ul></li><li>Communication Skills<ul><li>Learning Communication</li><li class="completed">Language trainning</li></ul></li><li>Team Manage Skills<ul><li>Manage Courses</li><li>Manage Courses1</li><li>Manage Courses2</li></ul></li><li>Project Manage Skills<ul><li>Agile PDLC Courses</li><li class="completed">Waterfall 123</li></ul></li><li>Time Manage Skills<ul><li class="completed">Manage Your Time Wisely</li></ul></li></ul></li>',
					        ui : 'round',
					        scrollable: true,
					        flex:1,
					        height:600
					},
					{
						xtype:'button',
						text: 'Add More Learning',
						ui :'Confirm',
				        flex:2,
				        height:30,
				        width:200,
				        align: 'right',
				        listeners : {
				        	tap: function(btn, e, opts){
					        	overlay = Ext.Viewport.add({
					        	    xtype: 'panel',
	
					        	    // We give it a left and top property to make it floating by default
					        	    left: 0,
					        	    top: 0,
	
					        	    // Make it modal so you can click the mask to hide the overlay
					        	    modal: true,
					        	    hideOnMaskTap: true,
	
					        	    // Make it hidden by default
					        	    hidden: true,
	
					        	    // Set the width and height of the panel
					        	    width: 400,
					        	    height: 400,
	
					        	    // Here we specify the #id of the element we created in `index.html`
					        	    html: 'Learning Content here',
	
					        	    // Style the content and make it scrollable
					        	    styleHtmlContent: true,
					        	    scrollable: true,
	
					        	    // Insert a title docked at the top with a title
					        	    items: [
					        	        {
					        	            docked: 'top',
					        	            xtype: 'toolbar',
					        	            title: 'Add Learning'
					        	        }
					        	    ]
					        	});
					        	overlay.showBy(btn);
				        	}
				        }
					}
        ]
	}
});
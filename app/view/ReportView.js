(function() {

    Ext.define('Kitchensink.view.ReportView', {
        alias: 'view.ReportView',
        extend: 'Ext.Panel',

        config: {
	        layout: 'card',
	        items: [
		        {
		            html: "First Item"
		        },
		        {
		            html: "Second Item"
		        },
		        {
		            html: "Third Item"
		        },
		        {
		            html: "Fourth Item"
		        }
		    ]
    });
})();

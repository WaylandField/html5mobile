Ext.define('Kitchensink.view.PromoteDetailView', {
    extend: 'Ext.Panel',
    xtype: 'promoteDetailView',
    config :{
	    html: '<ul class="promote"><li>Promotion History<ul><li>Principle Software Engineer<ul><li>2003 - 2005</li></ul></li><li>Lead Software Engineer<ul><li>2001 - 2003</li></ul></li><li>Senior Software Engineer<ul><li>2000 - 2001</li></ul></li><li>Software Engineer<ul><li>2000</li></ul></li></ul></li></ul>',
	    ui : 'round',
	    scrollable: true,
	    flex:1,
	    height:700
	}
});
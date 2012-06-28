(function() {
	Ext.define('Kitchensink.store.UserListStore', {
	extend: 'Ext.data.Store',
	id: 'UserListStore',
	requires: ['Kitchensink.model.User'],
	config : {
	    model: 'Kitchensink.model.User',
	    grouper: function(record) {
	        return record.get('firstName')[0];
	    },
	    data: [
	        {firstName: 'Julio', lastName: 'Benesh','color':'#ff0000','ready':'75%'},
	        {firstName: 'Julio', lastName: 'Minich','color':'#00ff00','ready':'60%'},
	        {firstName: 'Tania', lastName: 'Ricco','color':'#0000ff','ready':'40%'},
	        {firstName: 'Odessa', lastName: 'Steuck','color':'#ffff00','ready':'34%'},
	        {firstName: 'Nelson', lastName: 'Raber','color':'#ff00ff','ready':'28%'},
	        {firstName: 'Tyrone', lastName: 'Scannell','color':'#00ffff','ready':'22%'},
	        {firstName: 'Allan', lastName: 'Disbrow','color':'#669911','ready':'12%'}
	    ]
	}
});
})();

/**
 * ,
	        {firstName: 'Cody', lastName: 'Herrell','color':'#33aae6'},
	        {firstName: 'Julio', lastName: 'Burgoyne','color':'#ce11cd'},
	        {firstName: 'Jessie', lastName: 'Boedeker','color':'#cddd12'},
	        {firstName: 'Allan', lastName: 'Leyendecker','color':'#aecd34'},
	        {firstName: 'Javier', lastName: 'Lockley','color':'#ccffcc'},
	        {firstName: 'Guy', lastName: 'Reasor','color':'#ccffcc'},
	        {firstName: 'Jamie', lastName: 'Brummer','color':'#ccffcc'},
	        {firstName: 'Jessie', lastName: 'Casa','color':'#ccffcc'},
	        {firstName: 'Marcie', lastName: 'Ricca','color':'#ccffcc'},
	        {firstName: 'Gay', lastName: 'Lamoureaux','color':'#ccffcc'},
	        {firstName: 'Althea', lastName: 'Sturtz','color':'#ccffcc'},
	        {firstName: 'Kenya', lastName: 'Morocco','color':'#ccffcc'},
	        {firstName: 'Rae', lastName: 'Pasquariello','color':'#ccffcc'},
	        {firstName: 'Ted', lastName: 'Abundis','color':'#ccffcc'},
	        {firstName: 'Jessie', lastName: 'Schacherer','color':'#ccffcc'},
	        {firstName: 'Jamie', lastName: 'Gleaves','color':'#ccffcc'},
	        {firstName: 'Hillary', lastName: 'Spiva','color':'#ccffcc'},
	        {firstName: 'Elinor', lastName: 'Rockefeller','color':'#ccffcc'},
	        {firstName: 'Dona', lastName: 'Clauss','color':'#ccffcc'},
	        {firstName: 'Ashlee', lastName: 'Kennerly','color':'#ccffcc'},
	        {firstName: 'Alana', lastName: 'Wiersma','color':'#ccffcc'},
	        {firstName: 'Kelly', lastName: 'Holdman','color':'#ccffcc'},
	        {firstName: 'Mathew', lastName: 'Lofthouse','color':'#ccffcc'},
	        {firstName: 'Dona', lastName: 'Tatman','color':'#ccffcc'},
	        {firstName: 'Clayton', lastName: 'Clear','color':'#ccffcc'},
	        {firstName: 'Rosalinda', lastName: 'Urman','color':'#ccffcc'},
	        {firstName: 'Cody', lastName: 'Sayler','color':'#ccffcc'},
	        {firstName: 'Odessa', lastName: 'Averitt','color':'#ccffcc'},
	        {firstName: 'Ted', lastName: 'Poage','color':'#ccffcc'},
	        {firstName: 'Penelope', lastName: 'Gayer','color':'#ccffcc'},
	        {firstName: 'Katy', lastName: 'Bluford','color':'#ccffcc'},
	        {firstName: 'Kelly', lastName: 'Mchargue','color':'#ccffcc'},
	        {firstName: 'Kathrine', lastName: 'Gustavson','color':'#ccffcc'},
	        {firstName: 'Kelly', lastName: 'Hartson','color':'#ccffcc'},
	        {firstName: 'Carlene', lastName: 'Summitt','color':'#ccffcc'},
	        {firstName: 'Kathrine', lastName: 'Vrabel','color':'#ccffcc'},
	        {firstName: 'Roxie', lastName: 'Mcconn','color':'#ccffcc'},
	        {firstName: 'Margery', lastName: 'Pullman','color':'#ccffcc'},
	        {firstName: 'Avis', lastName: 'Bueche','color':'#ccffcc'},
	        {firstName: 'Esmeralda', lastName: 'Katzer','color':'#ccffcc'},
	        {firstName: 'Tania', lastName: 'Belmonte','color':'#ccffcc'},
	        {firstName: 'Malinda', lastName: 'Kwak','color':'#ccffcc'},
	        {firstName: 'Tanisha', lastName: 'Jobin','color':'#ccffcc'},
	        {firstName: 'Kelly', lastName: 'Dziedzic','color':'#ccffcc'},
	        {firstName: 'Darren', lastName: 'Devalle','color':'#ccffcc'},
	        {firstName: 'Julio', lastName: 'Buchannon','color':'#ccffcc'},
	        {firstName: 'Darren', lastName: 'Schreier','color':'#ccffcc'},
	        {firstName: 'Jamie', lastName: 'Pollman','color':'#ccffcc'},
	        {firstName: 'Karina', lastName: 'Pompey','color':'#ccffcc'},
	        {firstName: 'Hugh', lastName: 'Snover','color':'#ccffcc'},
	        {firstName: 'Zebra', lastName: 'Evilias','color':'#ccffcc'}
 */
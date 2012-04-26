(function() {

    Ext.define('Kitchensink.store.Reports', {
        alias: 'store.Reports',
        extend: 'Ext.data.Store',
        requires: ['Kitchensink.model.Report'],

        config: {
            model: 'Kitchensink.model.Report',
            data: [
            	{id:"1",username:"panderson1",fullname:"Anderson	Paula",title:"Dev manager",photo:"resources/testdata/1.jpeg",marked:false,status:"Completed"},
            	{id:"2",username:"aaaa",fullname:"Anderson	Alex",title:"engineer",photo:"resources/testdata/2.jpeg",marked:false,status:"Completed"},
            	{id:"3",username:"aabb",fullname:"Anderson II	Alex",title:"ui-engineer",photo:"resources/testdata/3.jpeg",marked:false,status:"Completed"},
            	{id:"4",username:"vmurray1",fullname:"Anton	Joe",title:"senior engineer",photo:"resources/testdata/4.jpeg",marked:false,status:"Completed"},
            	{id:"5",username:"sarnold",fullname:"Arnold	Sean",title:"senior engineer",photo:"resources/testdata/5.jpeg",marked:false,status:"Completed"},
            	{id:"6",username:"badri",fullname:"Badri	badri",title:"senior engineer",photo:"resources/testdata/1.jpeg",marked:false,status:"Completed"},
            	{id:"7",username:"aarnold1",fullname:"Arnold	Angela",title:"senior engineer",photo:"resources/testdata/2.jpeg",marked:false,status:"Completed"},
            	{id:"8",username:"sbaker1",fullname:"Baker	Scott",title:"lead engineer",photo:"resources/testdata/3.jpeg",marked:false,status:"Completed"},
            	{id:"9",username:"ssss",fullname:"Barcik	Steve",title:"lead engineer",photo:"resources/testdata/4.jpeg",marked:false,status:"Completed"},
            	{id:"10",username:"mbarista1",fullname:"Barista	Marcia",title:"director engineer",photo:"resources/testdata/5.jpeg",marked:false,status:"Completed"},
            	{id:"11",username:"sbeckett",fullname:"Beckett	Samuel",title:"principal engineer",photo:"resources/testdata/1.jpeg",marked:false,status:"Completed"},
            	{id:"12",username:"wbrown1",fullname:"Brown	Wendy",title:"architect",photo:"resources/testdata/2.jpeg",marked:false,status:"Completed"},
            ]
        }
    });
})();
(function() {

    Ext.define('Kitchensink.store.Reports', {
        alias: 'store.Reports',
        extend: 'Ext.data.Store',
        requires: ['Kitchensink.model.Report'],

        config: {
            model: 'Kitchensink.model.Report',
            data: [
            	{id:"1",username:"cgrant",fullname:"",title:"engineer",photo:"",marked:false,status:"Completed"},
            	{id:"2",username:"vstokes",fullname:"",title:"engineer",photo:"",marked:false,status:"Completed"},
            	{id:"3",username:"gthomson",fullname:"",title:"engineer",photo:"",marked:false,status:"Completed"},
            	{id:"4",username:"fjacob",fullname:"",title:"engineer",photo:"",marked:false,status:"Completed"},
            	{id:"5",username:"jmiller",fullname:"",title:"senior engineer",photo:"",marked:false,status:"Completed"},
            	{id:"6",username:"gvisto",fullname:"",title:"senior engineer",photo:"",marked:false,status:"Completed"},
            	{id:"7",username:"hsamule",fullname:"",title:"senior engineer",photo:"",marked:false,status:"Completed"},
            	{id:"8",username:"ssoren",fullname:"",title:"lead engineer",photo:"",marked:false,status:"Completed"},
            	{id:"9",username:"somull",fullname:"",title:"lead engineer",photo:"",marked:false,status:"Completed"},
            	{id:"10",username:"yyoule",fullname:"",title:"director engineer",photo:"",marked:false,status:"Completed"},
            	{id:"11",username:"eestain",fullname:"",title:"principal engineer",photo:"",marked:false,status:"Completed"},
            	{id:"12",username:"nttnew",fullname:"",title:"architect",photo:"",marked:false,status:"Completed"},
            ]
        }
    });
})();

Ext.define('Kitchensink.model.Report', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id',          type: 'string'},
            {name: 'username',        type: 'string'},
            {name: 'fullname',        type: 'string'},
            {name: 'title',      type: 'string'},
            {name: 'photo',   type: 'string'},
            {name: 'marked', type: 'boolean'},
            {name: 'status',        type: 'string'}
        ]
    }
});

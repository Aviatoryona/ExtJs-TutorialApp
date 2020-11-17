Ext.define('Tutorial.model.User', {
    extend: 'Tutorial.model.Base',

    fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'address.street', type: 'string', mapping: 'address.street' },
        { name: 'address.suite', type: 'string', mapping: 'address.suite' },
        { name: 'address.city', type: 'string', mapping: 'address.city' },
        { name: 'address.zipcode', type: 'string', mapping: 'address.zipcode' },
        { name: 'address.geo.lat', type: 'string', mapping: 'address.geo.lat' },
        { name: 'address.geo.lng', type: 'string', mapping: 'address.geo.lng' },
        { name: 'phone', type: 'string' },
        { name: 'website', type: 'string' },
        { name: 'company.name', type: 'string', mapping: 'company.name' },
        { name: 'company.catchPhrase', type: 'string', mapping: 'company.catchPhrase' },
        { name: 'company.bs', type: 'string', mapping: 'company.bs' },
    ]

});
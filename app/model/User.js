Ext.define('Tutorial.model.User', {
    extend: 'Tutorial.model.Base',

    fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'addressStreet', type: 'string', mapping: 'address.street' },
        { name: 'addressSuite', type: 'string', mapping: 'address.suite' },
        { name: 'addressCity', type: 'string', mapping: 'address.city' },
        { name: 'addressZipcode', type: 'string', mapping: 'address.zipcode' },
        { name: 'lat', type: 'string', mapping: 'address.geo.lat' },
        { name: 'lng', type: 'string', mapping: 'address.geo.lng' },
        { name: 'phone', type: 'string' },
        { name: 'website', type: 'string' },
        { name: 'companyName', type: 'string', mapping: 'company.name' },
        { name: 'companyCatchPhrase', type: 'string', mapping: 'company.catchPhrase' },
        { name: 'companyBs', type: 'string', mapping: 'company.bs' },

    ]

});
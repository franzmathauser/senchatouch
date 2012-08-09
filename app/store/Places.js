/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaProtoOne.store.Places',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'SenchaProtoOne.model.Place',
        autoLoad: false,
        grouper: {
            groupFn: function(record) {
                return record.get('name').toUpperCase().substr(0, 1);
            }
        },
        proxy: {
            type: 'ajax',
            url: 'http://localhost/PHPBackend/index.php/rest/places?location=-33.8670522,151.1957362',
            reader: {
                type: 'json',
                rootProperty:'results'
            }
        }
    }
})

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.store.Favorites',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'SenchaProtoOne.model.Place',
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'favorites'
        }
    }
})

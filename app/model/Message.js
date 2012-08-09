/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.model.Message', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: ['id','name', 'email', 'message']
    }
});
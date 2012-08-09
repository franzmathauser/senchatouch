/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaProtoOne.model.Place', {
   extend: 'Ext.data.Model',
   
   config: {
       fields: ['id', 'recordId', 'name', 'icon', 'vicinity', 'rating', 'geometry']
   }
    
});

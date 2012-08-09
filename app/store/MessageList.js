/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.store.MessageList', {
   extend: 'Ext.data.Store',
   
   config: {
       model: 'SenchaProtoOne.model.Message',
       autoLoad: true,
       
       storeId: 'MessageList',
       
       proxy: {
            type: 'ajax',
            url : 'http://localhost/PHPBackend/index.php/rest/messages',
            method: "GET",
            reader: {
                rootProperty: 'messages'
            }
        }
   }
   
});
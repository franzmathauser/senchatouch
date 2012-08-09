/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaProtoOne.controller.Main',{
    extend: 'Ext.app.Controller',
    
    config: {
        views: ['Home', 'Image', 'Blog', 'Contact', 'Places', 'PlacesDetails', 'Favorites'],

        controllers:[],

        models: ['Message', 'Place'],
        
        stores: ['Places', 'Favorites'],

        control: {
            'button[action=submitContact]': {
                tap: 'submitContactForm'
            }
        },
        
        refs: {
                contactForm: '#contactForm'
        }
    },
    
    submitContactForm: function(){
        
        var form = this.getContactForm();
        form.submit({
            url: 'http://backend.masterthesis.fm/index.php/rest/contacts'
        });
        
        /*
         var user = Ext.create('SenchaProtoOne.model.Message', {name:'Franz', email: 'franz.mathauser@nttdata.com', message: 'Hier kommt meine Nachricht'});
        user.save({
            success: function(ret) {
                user.set('id', ret.id);
                console.log(user);
            }
        });
        */
        
        
        
        //SenchaProtoOne.model.Message.create();
        
        /*
          
         var rest = this.getApplication().getController('RestController');
         console.log(rest);
         //rest.getUserByid(function(){alert('success');});
         
        
        console.log('prerefresh');
        var msgList = Ext.getCmp("messagelist");
        msgList._store.load();
        console.log(msgList);
        console.log('postrefresh');
         */
        
    },
    
    init: function(){
        
        /* var messageList = Ext.getStore("MessageList");
        messageList.load({
            callback: function(records, operation, success) {
                // the operation object contains all of the details of the load operation
                console.log(records);
                
            },
            scope: this
        });
        */
    }
});

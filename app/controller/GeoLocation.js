/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.controller.GeoLocation',{
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },

        control: {
            
        }
    },
    
    init: function(){
        
        /*
         
         Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                console.log(position.coords);
                
                var placesStore = Ext.getStore('Places');
                
                var placesProxy = placesStore.getProxy();
                
                placesProxy.setUrl('http://backend.masterthesis.fm/index.php/rest/places?location='+position.coords.latitude+','+position.coords.longitude);
                
                console.log(placesProxy);
                
                placesStore.load();
            },
            failure: function() {
                console.log('something went wrong with geolocation!');
            }
        });
        */
    }
    
});
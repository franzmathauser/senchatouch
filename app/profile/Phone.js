/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.profile.Phone',{
    extend: 'Ext.app.Profile',
    
    config: {
        views: ['Main', 'FavoritesContainer', 'PlacesContainer'], 
        controllers: ['PlacesDetails']
    },
    isActive: function(){
        return Ext.os.is.Phone;
    },
    launch: function(){
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        
        Ext.Viewport.add(Ext.create('SenchaProtoOne.view.phone.Main'));
    }
    
    
});
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.profile.Tablet',{
    extend: 'Ext.app.Profile',
    
    config: {
        views: ['Main', 'FavoritesContainer', 'PlacesContainer'], 
        controllers: ['PlacesDetails']
    },
    isActive: function(){
        return Ext.os.is.Tablet;
    },
    launch: function(){
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        
        Ext.Viewport.add(Ext.create('SenchaProtoOne.view.tablet.Main'));
    }
    
    
});
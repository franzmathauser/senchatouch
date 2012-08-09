/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.view.phone.FavoritesContainer', {
   extend: 'Ext.NavigationView',
   
   alias: 'widget.phone-favoritescontainer',
   
   config: {
       title: 'Favorites',
       iconCls: 'star',
       items: [
           {
               xtype: 'favoritespanel'
           }
       ]
   }
});
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaProtoOne.view.tablet.FavoritesContainer', {
   extend: 'Ext.Container',
   
   alias: 'widget.tablet-favoritescontainer',
   
   config: {
       layout:'fit',
       title: 'Favorites',
       iconCls: 'star',
       items: [
           {
               xtype: 'titlebar',
               title: 'Favorites',
               docked: 'top'
               
           },
           {
               xtype: 'favoritespanel',
               width: 450,
               docked: 'left'
           },{
               xtype: 'placesdetailspanel',
               layout:'fit'
           }
       ]
   }
});
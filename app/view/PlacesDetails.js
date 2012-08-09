/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.view.PlacesDetails', {
   extend: 'Ext.Panel',
   alias : 'widget.placesdetailspanel',
   
   config: {
       title: 'Details',
       layout: 'fit',
       scrollable: true,
       styleHtmlContent: true,
       styleHtmlCls: 'place-details',
       tpl: '<img src="{icon}" /><h1>{name}</h1><h3>{vicinity}</h3><h3>Rating: {rating}</h3>',
       items: [
           {
               xtype: 'button',
               text: 'Add to Favorites',
               iconMask: true,
               iconCls: 'star',
               ui: 'confirm',
               docked:'top',
               action: 'favButton',
               hidden:true
           }
      ]
   }
   
});
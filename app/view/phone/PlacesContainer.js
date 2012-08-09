/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaProtoOne.view.phone.PlacesContainer', {
   extend: 'Ext.NavigationView',
   
   alias: 'widget.phone-placescontainer',
   
   config: {
       title: 'Places',
       iconCls: 'maps',
       items: [
           {
               xtype: 'placespanel'
           }
       ]
   }
});


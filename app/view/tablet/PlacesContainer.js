/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaProtoOne.view.tablet.PlacesContainer', {
   extend: 'Ext.Container',
   
   alias: 'widget.tablet-placescontainer',
   
   config: {
       layout:'fit',
       title: 'Places',
       iconCls: 'maps',
       items: [
           {
               xtype: 'titlebar',
               title: 'Places',
               docked: 'top'
               
           },
           {
               xtype: 'placespanel',
               width: 450,
               docked: 'left'
           },{
               xtype: 'container',
               layout: 'vbox',
               items: [
                   {
                       xtype: 'placesdetailspanel',
                       flex: 1

                   },{
                       xtype: 'map',
                       flex:2,
                       mapOptions: {
                           minZoom: 10,
                           zoom: 16,
                           zoomControlOptions: {
                               style: 'SMALL'
                           },
                           streetViewControl: false,
                           rotateControl: false,
                           panControl: false,
                           overviewMapControl: false
                       }
                   }
                   
               ]
               
               
           }
       ]
   }
});


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.view.Places', {
   extend: 'Ext.Panel',
   
   alias: 'widget.placespanel',
   
   config: {
       title: 'Places',
       iconCls: 'maps',
       layout: 'fit',
        
        items: [
            {
                xtype: 'list',
                store: 'Places',
                itemTpl: '<img src="{icon}" /><h1>{name:ellipsis(22)}</h1><h3>{vicinity:ellipsis(40)}</h3>', 
                itemCls: 'place-entry',
                grouped: true,
                indexBar: true
            }
        ]
      
   }
});
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.view.Favorites', {
   extend: 'Ext.Panel',
   
   alias: 'widget.favoritespanel',
   
   config: {
       title: 'Favorites',
       iconCls: 'star',
       layout: 'fit',
        
        items: [
            {
                xtype: 'list',
                store: 'Favorites',
                itemTpl: '<img src="{icon}" /><h1>{name:ellipsis(25)}</h1><h3>{vicinity:ellipsis(40)}</h3>', 
                itemCls: 'place-entry'
            }
        ]
      
   }
});
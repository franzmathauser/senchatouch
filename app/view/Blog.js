/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaProtoOne.view.Blog',{
   extend: 'Ext.List',
   alias: 'widget.blogpage',
   
   config: {
       title: 'Blog',
       iconCls: 'star',
       
       itemTpl: '{title}',
        
        items: [{
            xtype:'titlebar', 
            title: 'Blog', 
            docked: 'top'
        }]
       
   }
});

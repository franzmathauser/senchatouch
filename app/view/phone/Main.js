/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.view.phone.Main',{
    extend: 'Ext.TabPanel',
    
    config: {
        fullscreen: true,
        tabBarPosition:'bottom',
        
        items: [
            {
                xtype: 'homepanel'
            },{
                xtype: 'imagecarousel'
            },{
                xtype: 'blogpage', 
                store: {
                    fields: ['title','url'],
                    data: [
                        {title: 'Ext Scheduler 2.0', url: 'http://www.google.de'},
                        {title: 'Ext Scheduler 3.0', url: 'http://www.google.de'},
                        {title: 'Ext Scheduler 4.0', url: 'http://www.google.de'},
                        {title: 'Ext Scheduler 5.0', url: 'http://www.google.de'},
                        {title: 'Ext Scheduler 6.0', url: 'http://www.google.de'}
                    ]
                }
            },{
                xtype: 'contactform'
            },{
                xtype: 'phone-placescontainer'
            },{
                xtype: 'phone-favoritescontainer'
            }
            

        ]
    }
});
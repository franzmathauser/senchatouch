/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.view.Home', {
    extend: 'Ext.Panel',
    alias: 'widget.homepanel',
    config:{
        title: 'Home',
        iconCls: 'home',
        cls: 'home',
        scrollable: true,
        html: [
            '<img src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Welcome to Sencha</h1>',
            '<p>We make awesome web application frameworkds including ExtJs',
            'and Sencha Touch</p>',
            '<h2>Sencha Touch (2.0.0.pr1)</h2>'
        ].join(""),
        
        items: [{
            xtype:'titlebar', 
            title: 'Home', 
            docked: 'top'
        }]
    } 
    
    
})
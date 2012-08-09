/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.view.Contact',{
    extend: 'Ext.form.Panel',
    alias: 'widget.contactform',
    
    id: 'contactForm',
    config: {
        title: 'Contact',
        iconCls: 'user',
        
        layout : {
            type: 'vbox'
        },
        
        items: [
            {
                title: 'Contact us',
                xtype: 'fieldset',
                instructions: 'Email is optional!',

                items: [
                    {
                        xtype: 'textfield',
                        title: 'Enter your name.',
                        label: 'Name',
                        name: 'name'

                    },{
                        xtype: 'emailfield',
                        title: 'Enter your Email.',
                        label: 'Email',
                        name: 'email'

                    },
                    {
                        xtype: 'textareafield',
                        title: 'Enter your Message.',
                        label: 'Message',
                        name: 'message',
                        required: true
                    }
                ]
            },{
                xtype: 'button',
                ui: 'confirm',
                text: 'Send',
                action: 'submitContact'
            },{
                xtype:'titlebar', 
                title: 'Contact Form', 
                docked: 'top'
            }
        ]
    }
});
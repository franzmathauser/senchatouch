/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.view.Image',{
    extend: 'Ext.Carousel',
    
    alias: 'widget.imagecarousel', 
    
    config: {
        xtype: 'carousel',
        title: 'Images',
        iconCls: 'star',

        items: [
            {
                xtype: 'image',
                src: 'http://leipzig-seiten.de/images/stories/olympia1.jpg'
            },
            {
                xtype: 'image',
                src: 'http://www.dosb.de/typo3temp/pics/7e028e2f6f.jpg'
            },
            {
                xtype: 'image',
                src: 'http://www.kn-online.de/var/storage/images/kn/sport/sport-in-ausland/olympische-spiele-london-2012/olympia-live/skyline-ist-auf-olympia-getrimmt/23652089-1-ger-DE/Skyline-ist-auf-Olympia-getrimmt_ArtikelQuer.jpg'
            }
            ,{
                xtype:'titlebar', 
                title: 'Image Carousel', 
                docked: 'top'
            }
        ]
    }
    
    
});
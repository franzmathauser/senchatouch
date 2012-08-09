Ext.define('SenchaProtoOne.controller.phone.PlacesDetails', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            placesContainer: 'phone-placescontainer',
            favoritesContainer : 'phone-favoritescontainer'
        },
        control: {
            'phone-placescontainer placespanel list' :{
                itemtap: function(list, index, target, record) {
                    console.log('Item ' + record.get('name') + ' tapped.');

                    var placesDetailsView = Ext.create('SenchaProtoOne.view.PlacesDetails');
                    placesDetailsView.setData(record.data);
                    this.getPlacesContainer().push(placesDetailsView);
                    
                    this.application.fireEvent('detailsShown',{
                        'data': record.data,
                        'button': placesDetailsView.getItems().items[0]
                    })
               }
            }, 
            
            'phone-favoritescontainer favoritespanel list' : {
                itemtap: function(list, index, target, record){
                    
                    console.log('Favorite Item ' + record.get('name') + ' tapped.');
                    
                    var placesDetailsView = Ext.create("SenchaProtoOne.view.PlacesDetails");
                    placesDetailsView.setData(record.data);
                    this.getFavoritesContainer().push(placesDetailsView);
                    
                    this.application.fireEvent('detailsShown',{
                        'data': record.data,
                        'button': placesDetailsView.getItems().items[0]
                    })
                }
            }
        }
    },
    
    init: function(application){
        this.application = application;
    }
    
});
Ext.define('SenchaProtoOne.controller.tablet.PlacesDetails', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            placesDetails: 'tablet-placescontainer placesdetailspanel',
            favoriteDetails : 'tablet-favoritescontainer placesdetailspanel',
            placesMap : 'tablet-placescontainer map'
        },
        control: {
            'tablet-placescontainer placespanel list' :{
                itemtap: function(list, index, target, record) {
                    console.log('Item ' + record.get('name') + ' tapped.');

                    var placesDetailsView = this.getPlacesDetails();
                    placesDetailsView.setData(record.data);
                    
                    var placesMap = this.getPlacesMap();
                    var location = record.get('geometry').location;
                    var coords = new google.maps.LatLng(location.lat, location.lng);
                    placesMap.setMapCenter(coords);
                    
                    console.log(placesMap.getMap());
                    this.currentMarker.setMap(placesMap.getMap());
                    this.currentMarker.setPosition(coords);
                    
                    this.application.fireEvent('detailsShown',{
                        'data': record.data,
                        'button': placesDetailsView.getItems().items[0]
                    })
               }
            }, 
            
            'tablet-favoritescontainer favoritespanel list' : {
                itemtap: function(list, index, target, record){
                    
                    console.log('Favorite Item ' + record.get('name') + ' tapped.');
                    
                    var placesDetailsView = this.getFavoriteDetails();
                    placesDetailsView.setData(record.data);
                    
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
        this.currentMarker = new google.maps.Marker({
                                draggable: false,
                                animation: google.maps.Animation.DROP
                            });
    }
    
});
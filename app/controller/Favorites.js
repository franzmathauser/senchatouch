/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaProtoOne.controller.Favorites', {
   extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'button[action=favButton]': {
                tap: function(button){
                    var data = button.getParent().getData();
                    
                    var id = data.recordId;
                    if(id === undefined){
                        id = data.id;
                    }
                    
                    var persistData= {
                        recordId: id,
                        name: data.name,
                        icon: data.icon,
                        vicinity: data.vicinity, 
                        rating: data.rating
                    }
                    console.log('You clicked the fav button of ' + data.name );
                    
                    var favoritesDS = Ext.getStore("Favorites");
                    
                    
                    if(button.getText() === "Add to Favorites"){
                        
                        favoritesDS.add(persistData);
                        favoritesDS.sync();
                        
                        button.setText("Remove from Favorites");
                        button.setUi("action");
                    } else {
                        
                        
        
                        var index = favoritesDS.find('recordId', id);
                        
                        favoritesDS.removeAt(index);
                        favoritesDS.sync();
                        
                        button.setText("Add to Favorites");
                        button.setUi("confirm");
                    }
                }
            }
        }
    },
    init: function(application){
        this.application = application;
        this.application.on({
            'detailsShown': this.onDetailsShown, 
            'scope': this
        });
    },

    onDetailsShown: function(event){
        
         var data = event.data;
         var button = event.button;
         
                
        console.log('onDeailsShown called for ' + data.name+ 'button text=' + button.getText());
        
        var id = data.recordId;
        if(id === undefined){
            id = data.id;
        }
        
        console.log(id);
        
        var favoritesDS = Ext.getStore("Favorites");
        
        var index = favoritesDS.find('recordId', id);
        
        if(index === -1){
            button.setText("Add to Favorites");
            button.setUi('confirm');
        }else {
            button.setText("Remove from Favorites");
            button.setUi('action');
        }
        
        button.setHidden(false);
        
    }
});
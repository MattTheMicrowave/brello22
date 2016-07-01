window.$ = window.jQuery = require('jquery');
var ListsView = require('./views/ListsView');
var ListsCollection = require('./collections/ListsCollection');
var ItemsView = require('./views/ItemsView');
var ItemsCollection = require('./collections/ItemsCollection');


var listsCollection = new ListsCollection();
var listsView = new ListsView({ collection : listsCollection });

var itemsCollection = new ItemsCollection();
var itemsView = new ItemsView({ collection: itemsCollection });


listsCollection.fetch();
itemsCollection.fetch();

$('#app').html(listsView.render().el);

var Backbone = require('backbone')
var ItemsCollection = require('../collections/ItemsCollection');

var ListModel = Backbone.Model.extend({
  urlRoot: '/lists',
  idAttribute: '_id',

parse: function(list) {
  var items = list.items || [];
  list.items = new ItemsCollection(items);
  return list;
}
});

module.exports = ListModel;

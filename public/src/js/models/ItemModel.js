var Backbone = require('backbone');
var TagsCollection = require('../collections/TagsCollection');

var ItemModel = Backbone.Model.extend({

  urlRoot: '/items',
  idAttribute: '_id',

  parse: function(item) {
    var tags = item.tags || [];
    item.tags = new TagsCollection(tags);

    return item;
  }
});

module.exports = ItemModel;

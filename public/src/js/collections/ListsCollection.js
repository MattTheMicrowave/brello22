var Backbone = require('backbone');
var ListModel = require('../models/ListModel');
var _ = require('underscore');

var ItemsCollection = require('./ItemsCollection');
var TagsCollection = require('./TagsCollection');

var ListsCollection = Backbone.Collection.extend({
  url: '/lists',
  model: ListModel,

  parse: function(objs) {
      _.each(objs, function(obj) {
        obj.items = new ItemsCollection(obj.items);
        obj.items.each(function(item) {
          item.set('tags', new TagsCollection(item.get('tags')));
        });
      });
      return objs;
    }
});

module.exports = ListsCollection;

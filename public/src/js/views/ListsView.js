var Backbone = require('backbone');
var _ = require('underscore');
var ListView = require('./ListView');

var ListsView = Backbone.View.extend({
  el: '<ul></ul>',

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
        this.$el.html('');
        var _this = this;
        this.collection.each(function(list){
              var listView = new ListView({model: list});
              _this.$el.append(listView.render().el);
              console.log('y');
        });
        return this;
  }
});

module.exports = ListsView;

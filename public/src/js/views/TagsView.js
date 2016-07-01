var Backbone = require('backbone');
var TagView = require('./TagView');

var TagsView = Backbone.View.extend({
  el: '<ul></ul>',

  render: function() {
    var _this = this;

    this.collection.each(function(tag) {
      var tagView = new TagView({ model: tag });
      _this.$el.append(tagView.render().el);
    });


    return this;
  }
});

module.exports = TagsView;

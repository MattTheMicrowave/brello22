var Backbone = require('backbone');
var _ = require('underscore');
var TagsView = require('./TagsView');


var ItemView = Backbone.View.extend({
  el: '<li></li>',

  template: _.template([
    '<span><%= name %> </span>',
    '<div> <%= tags %> </div>'
  ].join()),

  initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    // render: function() {
    //     var tagsView = new TagsView({ collection: this.model.get('tags') });
    //     this.$el.html(this.template( {model: this.model }));
    //     this.$el.find('span').html(tagsView.render().el);
    //     return this;
    // }
  render: function() {
    this.$el.append(this.template({
      name: this.model.get('name'),
      tags: this.model.get('tags')
    }));
    return this;
  }


});

module.exports = ItemView;

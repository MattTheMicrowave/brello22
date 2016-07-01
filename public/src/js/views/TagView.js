var _ = require('underscore');

var Backbone = require('backbone');

var TagView = Backbone.View.extend({
  el: '<li></li>',

  template: _.template('<span><%= name %></span>'),

  render: function() {
      var renderedTemplate = this.template({ name: this.model.get('name')});
      this.$el.html(renderedTemplate);

      return this;
  }
});

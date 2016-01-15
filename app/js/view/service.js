var app = app || {};

app.ServiceView = Backbone.View.extend({
	el : '.page',
	initialize:  function(){
		var self = this;
		console.log('ServiceView initialize()');
		//initial render 
		self.render();	
	},
	render: function(){
		var template = _.template($('#service-template').html());
		this.$el.html(template);
		return this;
	}
});
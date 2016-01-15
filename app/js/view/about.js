var app = app || {};

app.AboutView = Backbone.View.extend({
	el : '.page',
	template: Handlebars.compile($("#about-template").html()),
	
	initialize:  function(){
		var self = this;
		console.log('AboutView initialize()');
		//initial render 
		self.render();
	},
	
	render: function(){
		var self = this;
		console.log('AboutView render()');
		var inner_html = self.template({name : 'Anna', age : 33});
		self.$el.html(inner_html);
		return this;
	}
});

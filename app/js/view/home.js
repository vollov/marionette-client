var app = app || {};
app.api_host='http://localhost:8000';

app.HomeView = Backbone.View.extend({
	el : '.page',
	template: Handlebars.compile($("#home-template").html()),
	model: null,
	
	initialize:  function(users){
		var self = this;
		console.log('HomeView initialize()');
		
		self.model = new app.UserCollection();
		
		self.model.fetch({success: function(e){
				console.log('Got data');
				self.render();
			},
			error: function(e){
				console.log('Something went wrong');
			}
		});
		
		self.listenTo(self.model, 'change', self.render);
	},
	
	render: function(){
		var self = this;
		console.log('HomeView render()');
		var template = self.template({users: self.model.toJSON()});
		self.$el.html(template);
		
		return self;
	}
});

app.UserDetailView = Backbone.View.extend({
	tagName: "li",
	className: "user-item",
	template: Handlebars.compile($("#user-item-template").html()),
	
	render: function(id){
		var self = this;
		// set the model here
		//self.model = 
		console.log('UserItemView render()');
		var inner_html = self.template({'user':self.model.toJSON()});
		self.$el.html(inner_html);
		return self;
	}
});
var app = app || {};

app.PostView = Backbone.View.extend({
	tagName: 'li',
	template: Handlebars.compile($("#post-template").html()),
	
//	initialize:  function(){
//		var self = this;
//		console.log('PostView initialize()');
//		//initial render 
//		self.render();
//	},
	
	render: function(){
		var self = this;
		console.log('PostView render()');
		var inner_html = self.template({post : this.model.toJSON()});
		self.$el.html(inner_html);
		return this;
	}
});


app.PostListView = Backbone.View.extend({
	el : '.page',
	template: Handlebars.compile($("#post-list-template").html()),
	model: null,
	initialize:  function(users){
		var self = this;
		console.log('HomeView initialize()');
		
		self.model = new app.PostCollection();
		
		self.model.fetch({success: function(e){
				console.log('Got post data');
				self.render(self.model);
			},
			error: function(e){
				console.log('Something went wrong');
			}
		});
		
		self.listenTo(self.model, 'change', self.render);
	},
	
	render : function() {
		var self = this;
//		_.each(self.model, function(post){ console.log('post -'); } )
//		self.collection.forEach(function(post) {
//			self.$el.append(new app.PostView({
//				model : post
//			}).render().el);
//		});
		
		self.model.each(function(model){
			console.log('post -' + model.title);
		});
		
		return self;
	}
});
var app = app || {};

app.Post = Backbone.Model.extend({
	urlRoot : app.api_host + '/api/post',
	
	initialize: function(){
		console.log('Post model initialize()');
	}
});

app.PostCollection = Backbone.Collection.extend({
	url : app.api_host + '/api/post',
	model: app.Post,
	initialize: function(){
		console.log('Post collection initialize()');
	},
});
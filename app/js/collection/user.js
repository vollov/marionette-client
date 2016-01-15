var app = app || {};

app.UserCollection = Backbone.Collection.extend({
	url : app.api_host + '/api/user',
	model: app.User,
	initialize: function(){
		console.log('User collection initialize()');
	},
});


var app = app || {};

app.User = Backbone.Model.extend({
	urlRoot : app.api_host + '/api/user',
	
	initialize: function(){
		console.log('User model initialize()');
	},
	
	defaults: {
		"firstname" : "First Name",
		"lastname" : "Last Name",
		"age" : 0
	}
});

app.App = Backbone.Model.extend({
	initialize: function(){
		console.log('App model initialize()');
	},
	
	defaults: {
		"name" : "App Name"
	}
});
var app = app || {};
app.api_host='http://localhost:8000';

app.AppRouter = Backbone.Router.extend({
	routes: {
		'' : 'sayHello',
		'service': 'service',
		'about': 'about',
		'user/:id':'userById',
		'posts':'posts',
		'*default': 'defaultRoute'
	},
	
	initialize:  function(){
		console.log('AppRouter initialize()');
		var self = this; 
	},
	sayHello: function(){
		//app.homeView.render();
		console.log('hello in router');
	},
	defaultRoute: function(){
		console.log('Router does not handle this route');
	},
	about: function(){
		//app.aboutView.render();
		console.log('about in router');
	},
	userById: function(){
		console.log('userById in router');
	},
	service: function(){
		//app.serviceView.render();
		console.log('service in router');
		
	},
	
});

var userDetailView = new app.UserDetailView({});
var homeView = new app.HomeView({});
var serviceView = new app.ServiceView({});
var aboutView = new app.AboutView({});
var postsView = new app.PostListView({});
var router = new app.AppRouter;

router.on('route:sayHello', function() {	
	homeView.render();
});

router.on('route:posts', function() {	
	postsView.render();
});

router.on('route:userById', function(id) {
	
	//router.navigate('book/'+name);
	userDetailView.render();
});

router.on('route:service', function() {
	
	serviceView.render();
});

router.on('route:about', function() {
	
	aboutView.render();
})

Backbone.history.start();
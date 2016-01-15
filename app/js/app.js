var app = new Mn.Application();
app.api_host='http://localhost:8000';

app.User = Backbone.Model.extend({
	//urlRoot : app.api_host + '/api/user',
});

app.UserCollection = Backbone.Collection.extend({
	url : app.api_host + '/api/user',
	model: app.User,
});

app.UserItemView = Mn.ItemView.extend({
    tagName: "li",
    //template: "#user-template"
    template: Handlebars.compile($("#user-hb-template").html()),
  });

app.UserCollectionView = Mn.CollectionView.extend({
    tagName: "ul",
    childView: app.UserItemView
});

var AboutView = Mn.ItemView.extend({
	id: "static-view",
	tagName: "span",
	className: "instruction",
	template: Handlebars.compile($("#about-template").html()),
});

var SiteLayoutView = Mn.LayoutView.extend({
	el: "#app-container",
	regions: {
		content: ".page",
		navigation: ".nav-section"
	},
});

var routeController = {
	sayHello: function(){
		console.log('hello in router');
		var users = new app.UserCollection();
		users.fetch();
		var userListView = new app.UserCollectionView({
			collection: users
		});
		app.regions.content.show(userListView);
	},
	defaultRoute: function(){
		console.log('Router does not handle this route');
	},
	about: function(){
		var aboutView = new AboutView();
		app.regions.content.show(aboutView);
		//app.aboutView.render();
		console.log('about in router');
	},
	userById: function(id){
		console.log('userById in router id =' + id);
	},
	service: function(){
		//app.serviceView.render();
		console.log('service in router');
	}
};

var SiteRouter = Mn.AppRouter.extend({
	controller: routeController,
	appRoutes: {
		'' : 'sayHello',
		'service': 'service',
		'about': 'about',
		'user/:id':'userById',
	},
	
	initialize:  function(){
		console.log('SiteRouter initialize()');
		var self = this; 
	},
	
});
	
app.on('start', function() {
	console.log("app has started!");
	new SiteRouter();
	//console.log('app host:', options.host);
	if (Backbone.history){
		Backbone.history.start();
	}
});

app.on('before:start', function() {
	console.log("fired just before the Application starts and before the initializers are executed.");
	app.regions = new SiteLayoutView();
});
app.start();

//var SiteApp = Mn.Application.extend({
//  initialize: function(options) {
//    console.log('SiteApp init container:', options.container);
//    
//  }
//});
//
////Create our Application
//var app = new SiteApp({container: '#app'});
//

//

//
//var SiteLayoutView = Mn.LayoutView.extend({
//	el: ".container",
//	regions: {
//		content: '.page',
//		navigation: '.nav-section'
//	},
//});
//
//
//
//// Start history when our application is ready
//app.on('start', function() {
//	console.log("app has started!");
//	new SiteRouter();
//	//var staticView = new AboutView();
//	//app.regions.main.show(staticView);
//	//console.log('app host:', options.host);
//	if (Backbone.history){
//		Backbone.history.start();
//	}
//});
//
//app.on('before:start', function() {
//	console.log("fired just before the Application starts and before the initializers are executed.");
//	app.regions = new SiteLayoutView();
//	app.regions.render(); 
//});
//
//// Load some initial data, and then start our application
////loadInitialData().then(app.start);
//var options = {
//	host: "some host value",
//	app_name: "application name value"
//};
//
//app.start(options);
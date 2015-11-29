Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'mainLayout',
	waitOn: function () {
		return [
		Meteor.subscribe('product'),
		Meteor.subscribe('media'),
		Meteor.subscribe('users'),
		Meteor.subscribe('menu'),
		Meteor.subscribe('order')
//array of the router names and user id required for 
				];
	}
});


Router.route('/', {
	name: 'home',
	layoutTemplate: 'mainLayout'
});

Router.route('/add', {
	name: 'addProduct',
	layoutTemplate: 'mainLayout'
});

Router.route('/view', {
	name: 'viewProduct',
	layoutTemplate: 'mainLayout'
});

Router.route('/cview', {
	name: 'custView',
	layoutTemplate: 'mainLayout'
});

Router.route('/ship', {
	name: 'checkOut',
	layoutTemplate: 'mainLayout'
});

Router.route('/addUser', {
	name: 'addUser',
	layoutTemplate: 'mainLayout'
});

Router.route('/customMenu', {
	name: 'customMenu',
	layoutTemplate: 'mainLayout'
});

Router.route('/editUser/:_id', {
	name: 'editUser',
	layoutTemplate: 'mainLayout',
	data: function(){
		return Meteor.users.findOne({_id: this.params._id}, {fields: {emails: 1, profile: 1}});
	}
});

Router.route('/oview/:_id', {
	name: 'oneProd',
	layoutTemplate: 'mainLayout',
	data: function(){
		return Products.findOne(this.params._id);
	}
});



var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
     	Router.go('home');
    }
  } else {
    this.next();
  }
}

/*
	Require user to be logged in to access any of the route NAMES listed in the only field
*/


Router.onBeforeAction(requireLogin, {
   // only: ['addProduct', 'startStory']
});


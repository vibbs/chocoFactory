Template.mainLayout.helpers({
	

});

Template.mainLayout.events({
	'click #logout' : function  () {
		Meteor.logout();
		Router.go('home');
	},
	'click .maintitle' : function(){
		Router.go('home');
	},
	'click .cart' : function(){
		Router.go('checkOut');
	}

});


if(Meteor.isClient){
Meteor.subscribe('product');
		Meteor.subscribe('media');
		Meteor.subscribe('users');
		Meteor.subscribe('menu');
		Meteor.subscribe('order');
		Meteor.subscribe('production');
		Meteor.subscribe('supply');
	}
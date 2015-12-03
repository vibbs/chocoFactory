Template.mainLayout.helpers({
	bool1  : function(){
		
		if((Meteor.user().emails[0].address == "admin@test.com")||
			(Meteor.user().profile.role == "chef")||
			(Meteor.user().profile.role == "manager")){
			return true;
		}else{
			return false;
		}

	},
	bool2  : function(){

		if((Meteor.user().emails[0].address == "admin@test.com")||
			(Meteor.user().profile.role == "manager")){
			return true;
		}else{
			return false;
		}


	},
	bool3  : function(){

		if((Meteor.user().emails[0].address == "admin@test.com")||
			(Meteor.user().profile.role == "chef")||
			(Meteor.user().profile.role == "manager")){
			return true;
		}else{
			return false;
		}
	},
	bool4  : function(){
		if((Meteor.user().emails[0].address == "admin@test.com")||
			(Meteor.user().profile.role == "chef")||
			(Meteor.user().profile.role == "manager")||
			(Meteor.user().profile.role == "employee")){
			return true;
		}else{
			return false;
		}
	},
	bool5  : function(){

		if((Meteor.user().emails[0].address == "admin@test.com")||
			(Meteor.user().profile.role == "manager")){
			return true;
		}else{
			return false;
		}
	},
	bool6  : function(){

		if((Meteor.user().emails[0].address == "admin@test.com")||
			(Meteor.user().profile.role == "manager")){
			return true;
		}else{
			return false;
		}
	},
	bool7  : function(){

		if((Meteor.user().emails[0].address == "admin@test.com")||
			(Meteor.user().profile.role == "chef")||
			(Meteor.user().profile.role == "manager")){
			return true;
		}else{
			return false;
		}
	}
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
	},
	"click #sign-out" : function () {

		if(Meteor.user()){
			document.getElementById("sign-out").innerHTML = "SignOut";
		}else{
			document.getElementById("sign-out").innerHTML = "Login";
		}
		
		

		Meteor.logout();
	}

});


if(Meteor.isServer){
	Meteor.subscribe('product');
		Meteor.subscribe('media');
		Meteor.subscribe('users');
		Meteor.subscribe('menu');
		Meteor.subscribe('order');
		Meteor.subscribe('production')
		Meteor.subscribe('supply');
}
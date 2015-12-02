Template.login.events({
	"click #login-button" : function(event, template) {
		var email = template.find("#login-email").value;
		var password = template.find("#login-password").value;
		Meteor.loginWithPassword(email, password, function(error){
			if (error) { //Show user why he can't log in
				Session.set('errors', error.reason);
			}else{// Head to homepage
				document.getElementById("sign-out").innerHTML = "Signout";
				Router.go('userDash');
			}
		});
	},
	'click .fpass' : function(event, template){
		var email = prompt("Enter Registered Email :\n'");

		
		if (email!="") {
			alert("Reset link sent to : " +email);
		}else{
			alert("Invalid Email address!");
		}
	}
});

Template.login.helpers({
	hasErrors : function () {
		if (Session.get('errors') != false) {
			return true; 
		}else{
			return false;
		}
	},
	errors: function () {
		return Session.get('errors');
	}
})
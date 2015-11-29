
Template.addUser.helpers({
	Users : function(){

		var customers = Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
		console.log(customers);
        console.log(Meteor.user().emails[0].address);
		return customers;
	}
    


});

Template.allusers.helpers({
    isAdmin : function(){
        console.log(Meteor.user().emails[0].address);

        //only in this case it will be reverse actual code will be 
        /*
            return (Meteor.user().emails[0].address == "admin@test.com") ? true : false;
        */

        return (Meteor.user().emails[0].address == "admin@test.com") ? false : true;
    }

});

Template.addUser.events({
	'click .submitUser' : function(event, template){
		event.preventDefault();
        var email = template.find("#email").value;
        var password = template.find("#pass").value;
        var role = template.find('#role').value;

        Accounts.createUser({
    		email: email,
    		password: password,
    		profile : {
    			role: role,
                password : password,
    			orderHistory : [],
    			currentOrder : null
    		}
		});

		Meteor.logout();

		Meteor.loginWithPassword('admin@test.com', 'admin123');

        //Router.go('home');
	}

});
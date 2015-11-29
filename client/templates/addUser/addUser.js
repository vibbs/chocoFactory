
Template.addUser.helpers({
	Users : function(){

		var customers = Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
		console.log(customers);
		return customers;
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
    			currentOrder : []
    		}
		});

		Meteor.logout();

		Meteor.loginWithPassword('admin@test.com', 'admin123');

        //Router.go('home');
	}

});
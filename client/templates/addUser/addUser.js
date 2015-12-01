
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
        var bool = false; 

        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
     
        console.log(pattern.test(email));
       // console.log(Meteor.call('isValidEmailAddress', email));


        if((email == null||email == "")
            &&(password == null||password == "")) { 
                if(pattern.test(email)){  
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

        }else{
             alert("Input fields cannot be blank!");
        }
        }else{
           alert("Invalid email!");
        }
    
        //Router.go('home');
	}

});


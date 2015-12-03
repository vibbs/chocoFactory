Template.register.events({
	//When user clicks button on registeration page
	"click #register-button" : function(event, template) {
		event.preventDefault();

		//Get the new users info
		var fname = template.find("#fname-register").value;
		var lname = template.find("#lname-register").value;
		var password = template.find("#password-register").value;
		var password2 = template.find("#password-register2").value;
		var email = template.find("#email-register").value;
		var address = template.find("#add").value;
		var zipcode = template.find("#zip").value;
		var phno = template.find("#phno").value;

		//Add an account document to the user collection
		if(password==password2){ 
			if(email!=""&&address!=""&&zipcode!=""&&phno!=""&&fname!=""&&
				lname!=""){  
		Accounts.createUser({
			email: email,
			password: password,
			profile: {
				email: email,
				first_name: fname,
				last_name: lname,
				role: "customer",
                password : password,
    			orderHistory : [],
    			currentOrder : null,
    			address : address,
                zipcode :zipcode,
                phno: phno
			},
		}, function(error) { // Catch any errors
			if( error ) {
				console.log(error.reason);
			}
		});

		Router.go('/');
		}else{
			alert("Fields cannot be empty!");
			this.next();
		}
		}else{
			alert("Password Don't Match!");
		}
	},
});
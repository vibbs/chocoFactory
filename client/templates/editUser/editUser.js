Template.editUser.helpers({

});

Template.editUser.events({
	'click .save' :function  (events, template) {

		var fname = template.find("#fname").value;
		var lname = template.find("#lname").value;
		var address = template.find("#add").value;
		var zipcode = template.find("#zip").value;
		var phno = template.find("#phno").value;


		if( Meteor.user() ) {
				Meteor.users.update({_id: Meteor.userId()}, {
					$set: 
					{
						profile: {
							first_name: fname,
							last_name: lname,
							address : address,
			                zipcode :zipcode,
			                phno: phno
						}
					}
				});	
			}
	}
});
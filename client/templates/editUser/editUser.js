Template.editUser.helpers({

});

Template.editUser.events({
	'click .save' :function  (events, template) {

		var fname = template.find("#fname").value;
		var lname = template.find("#lname").value;

		if( Meteor.user() ) {
				Meteor.users.update({_id: Meteor.userId()}, {
					$set: 
					{
						profile: {
							first_name: fname,
							last_name: lname,
						}
					}
				});	
			}
	}
});
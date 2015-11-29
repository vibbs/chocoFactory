Template.checkOut.helpers({
	help : function () {
		//add to this user profile as order number
		Meteor.users.update({ _id: Meteor.userId() }, {$push: {"profile.currentOrder": Session.get("orderID")}});
		return Session.get("orderID");
	}

});


Template.checkOut.events({



});
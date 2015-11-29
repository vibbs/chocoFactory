Template.customMenu.helpers({
	menuItem : function(){
		
		return Menu.find();
	}

});

Template.customMenu.events({


});

Session.setDefault("orderID", null);

Template.item.events({
	'click .shop' : function(events, template){
		console.log("cleicked");


		var productID = this._id;
		var qty = template.find(".qty").value;
		var desc = template.find(".desc").value;

		var OrderID = Session.get("orderID");

		if( OrderID== null) { 
		Meteor.call('insertOrder', Meteor.userId(), productID,qty, desc, true, function(error, result){
				if(error){
				alert('Error');
				}else{
				Session.set("orderID", result);
				}
				});

		}
		else {
			Meteor.call('addProductOrder', Session.get("orderID"), productID, qty, desc, true);
		}	

		console.log(Session.get("orderID"));


		Router.go('checkOut');
	}

});


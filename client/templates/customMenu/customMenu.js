Template.customMenu.helpers({
	menuItem : function(){
		return Menu.find();
	}

});

Template.customMenu.events({


});

Template.item.events({
	'click .shop' : function(events, template){
		console.log("cleicked");


		var productID = this._id;
		var qty = template.find(".qty").value;
		var desc = template.find(".desc").value;

		Meteor.call('insertOrder', productID,qty, desc, function(error, result){
				if(error){
				alert('Error');
				}else{
				Session.set("orderID", result);
				}
				});

			

		console.log(Session.get('orderID'));


		Router.go('checkOut');
	}

});


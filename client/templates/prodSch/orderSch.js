Template.orderSch.helpers({
	orders : function  () {
		
		return Order.find().fetch();
	}

});

Template.orderSch.events({

});


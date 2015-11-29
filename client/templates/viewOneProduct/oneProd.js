


Template.oneProd.helpers({
	count : function(){
		return Session.get('counter');
	}

});

Session.setDefault("orderID", null);

Template.oneProd.events({
	'click .plus' : function(events,template){
		if (Session.get('counter')<this.qty){

		Session.set('counter', Session.get('counter') + 1);
		Meteor.call('decQty', this._id);
		}
		//Session.set('qty', Session.get('qty') - 1);
		

	},
	'click .minus' : function(events,template){
		if (Session.get('counter')>0) {

		Session.set('counter', Session.get('counter') - 1);
		Meteor.call('incQty', this._id);
		}
	},
	'click .shop' : function(events, template){
		console.log("cleicked");


		var productID = this._id;
		var qty = Session.get('counter');
		var desc = template.find(".desc").value;

		var OrderID = Session.get("orderID");

		if( OrderID== null) { 
		Meteor.call('insertOrder', Meteor.userId(), productID,qty, desc, false, function(error, result){
				if(error){
				alert('Error');
				}else{
				Session.set("orderID", result);
				}
				});
		Session.set("done", true);

		}
		else {
			Meteor.call('addProductOrder', Session.get("orderID"), productID, qty, desc, false);
		}	

		console.log(Session.get("orderID"));
		Session.set('counter',0);

		Router.go('checkOut');
	},
	'click .cancel' :function(){
		Session.set('counter',0);
		Router.go('viewProduct');
	}


});
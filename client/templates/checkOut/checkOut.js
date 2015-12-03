Template.checkOut.helpers({
	help : function () {
		//add to this user profile as order number
		Meteor.users.update({ _id: Meteor.userId() }, {$set : {"profile.currentOrder": Session.get("orderID")}});
		//return Session.get("orderID");
		if(Session.get("done")){
			Meteor.call('doneProduct',Session.get("orderID"))
		}
	},
	products :function(){
        //need to display the products in the current order 
        var prods = [];
        var ret = [];
        
        var order = Order.findOne({_id :Session.get("orderID") });
        prods = order.productOrder;

        for (var i = 0; i < prods.length; i++) {
		    console.log(prods[i][0]);
		    console.log(prods[i][1]);
		    console.log(prods[i][2]);
		    console.log(prods[i][3]);
		    var Obj = {
		    	productID : prods[i][0],
		    	qty : prods[i][1],
		    	note : prods[i][2],
		    	custom : prods[i][3]
		    };
		    //Do something
		    ret.push(Obj);
		}
        
        console.log(ret);
        return ret;


    }

});

Template.eachProd.helpers({
	nam : function(){
		console.log(this.productID);
		var obj  = Menu.findOne({_id : this.productID});
		return obj.name;
		console.log(obj.prize);
	},
	prize :function(){
		var obj  = Menu.findOne({_id : this.productID});
		
		return obj.prize;
	},
	nam2 : function(){
		var obj  = Products.findOne({_id : this.productID});
		return obj.name;
	},
	cost :function(){
			var obj  = Products.findOne({_id : this.productID});
		return obj.prize;
	}

});


Template.checkOut.events({
	'click .ship' : function(events, template){
		console.log("shipped");
		//have to push all the current into history of user and clear current
		Meteor.users.update({ _id: Meteor.userId() }, {$push : {"profile.orderHIstory": Session.get("orderID")}});
		
		Meteor.users.update({ _id: Meteor.userId() }, {$set : {"profile.currentOrder": null}});

		Meteor.call('addOrderID', Session.get("orderID"));

		alert("OrderID:" + Session.get("orderID") + "  Has beed Placed! Thank you.");

		Session.set("orderID", null);

		Router.go('userDash');
		
	}


});
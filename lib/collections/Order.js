Order = new Mongo.Collection('order');

Meteor.methods({
	"insertOrder": function(userID, productID, qty, req) {
		
			
			var Obj = {
				userID: userID,
				productOrder : [[productID,qty,req]],
				delivered : false,
				done : false
			};

			var id = Order.insert(Obj);
			console.log(id);
			return id;


	},
	"addProductOrder" :function (orderID,productID, qty, req){
		Order.update({_id: orderID},{$push : 
			{
				productOrder : [productID,qty,req]
			}
		});

	}

});
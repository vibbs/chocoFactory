Order = new Mongo.Collection('order');

Meteor.methods({
	"insertOrder": function(userID, productID, qty, req, bool) {
		
			
			var Obj = {
				userID: userID,
				productOrder : [[productID,qty,req, bool]],
				delivered : false,
				done : false,
				custom : true,
				date : new Date()
			};

			var id = Order.insert(Obj);
			console.log(id);
			return id;


	},
	"addProductOrder" :function (orderID, productID, qty, req, bool){
		Order.update({_id: orderID},{$push : 
			{
				productOrder : [productID,qty,req, bool]
			}
		});

	},
	"doneProduct" : function(orderID){
		Order.update({_id: orderID},{$set : 
			{
				done : true
			}
		});
	},
	"doneProductNot" : function(orderID){
		Order.update({_id: orderID},{$set : 
			{
				done : false
			}
		});
	},
	"doneProductDelivery" : function(orderID){
		Order.update({_id: orderID},{$set : 
			{
				delivered : true
			}
		});
	}

});
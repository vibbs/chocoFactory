Production = new Mongo.Collection("production");

Meteor.methods({
	"insertPS" : function  (orderID) {
		var Obj = {
				orderID : [{ID : orderID}]
			};

		return Production.insert(Obj);	
	},
	"addOrderID" : function (orderID){
		var Obj = Production.findOne();
		Production.update({_id: Obj._id},{$push :
			{ 
				orderID : {ID : orderID}
			}
		});
	},
	"removeOrderID" :function(orderID){
		var Obj = Production.findOne();
		Production.update({_id: Obj._id},{$pull :
			{ 
				orderID : {ID : orderID}
			},
		});
	}
});
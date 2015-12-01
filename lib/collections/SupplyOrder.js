Supply = new Mongo.Collection('supply');

Meteor.methods({
	"insertSO" : function  (item,qty,supplier) {

		var obj = {
			item : item,
			qty :qty,
			supplier: supplier,
			recieved : false,
			date : new Date()
		};
		Supply.insert(obj);
		
	},
	"removeSO" :function(SOID){
		Supply.remove({_id : SOID});
		
	},
	"changeSSO" :function(SOID, bool){
		Supply.update({_id : SOID} , {$set : {recieved : bool}});
	}
});
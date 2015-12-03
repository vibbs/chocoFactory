Products = new Mongo.Collection('product');

Meteor.methods({
	"insertProduct": function(name,description,prize, qty, mediafile_id) {
		
			
			var Obj = {
				name : name,
				description : description,
				prize : prize,
				qty : qty,
				media_file_id : mediafile_id
				//comment : comment,
				//rating : rating
			};

			Products.insert(Obj);


	},
	"updateProduct": function(product_id,name,description,prize, qty, mediafile_id){
		Products.update({_id: product_id}, {$set : 
			{
				name : name,
				description : description,
				prize : prize,
				qty : qty,
				media_file_id : mediafile_id
			}
		});
	},
	"decQty": function(product_id){
		Products.update({_id: product_id}, {$inc : 
			{
				qty : -1
			}
		});

	},
	"incQty": function(product_id){
		Products.update({_id: product_id}, {$inc : 
			{
				qty : 1
			}
		});
	},
	"removeProduct": function(product_id){
		Products.remove({_id: product_id});
	}
	/*
	"addReview": function(product_id, comment, rating){
		Products.update({_id: product_id}, {$push : 
			{
				review : {comment, rating}
			}
		});
	}
	*/
	
});
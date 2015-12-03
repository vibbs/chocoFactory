Template.prodSch.helpers({
	orders : function  () {
			var obj = Order.find().fetch();
			console.log("obj123"+obj[0]);
			console.log(obj[0]);
			
			for (var i = 0; i < obj.length; i++) {


				if(i == 0){
					Meteor.call('insertPS', obj[i]._id);
				}
				else{
					Meteor.call('addOrderID', obj[i]._id);
				}
			}
		var EO  = Production.findOne();
		console.log(EO.orderID);
		
		return EO.orderID;
	}

});

Template.prodSch.events({

});


Template.eachProduct2.helpers({
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

Template.eachorder2.helpers({
	orderID : function(){
		return this.ID
	},
	done : function(){
		 var order = Order.findOne({_id :this.ID });
		return order.done  ?  "true" : "false";
	},
	products :function(){
        //need to display the products in the current order 
        var prods = [];
        var ret = [];

        var order = Order.findOne({_id :this.ID });

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

Template.eachorder2.events({
	'click .status' : function(events, template){
		var order = Order.findOne({_id :this.ID });
		order.done  ?  Meteor.call('doneProductNot', this.ID) : Meteor.call('doneProduct', this.ID);
		
	},
	'click .del' : function(events, template){
		var order = Order.findOne({_id :this.ID });
		order.done  ? Meteor.call('removeOrderID', this.ID): alert("Production not yet complete");
		//Meteor.call('removeOrderID', this.ID);
	}

});
Template.orderSch.helpers({
	orders : function  () {
		
		return Order.find().fetch();
	}

});

Template.orderSch.events({

});


Template.eachproduct2.helpers({
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

Template.eachOrder2.helpers({
	orderID : function(){
		return this.ID
	},
	done : function(){
		 var order = Order.findOne({_id :this.ID });
		return order.done  ?  "Prepared" : "In-Preparation";
	},
	products :function(){
        //need to display the products in the current order 
        var prods = [];
        var ret = [];

        var order = Order.findOne({_id :this._id });

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
        console.log(order.date);
        return ret;


    },
    odate: function(){
    		var order = Order.findOne({_id :this._id });
    		console.log(order.date);
    		return moment(order.date).format('MM-DD-YYYY');
    }
    

});

Template.eachOrder2.events({
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


Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});
Template.userDash.helpers({
	help : function () {
		//Meteor.users.findOne({_}, {fields: {emails: 1, profile: 1}});

	},
	order :function(){
        //need to display the products in the current order 
        //var prods = [];
        var ret = [];
        var allorder = [];
        console.log(Meteor.user().profile.orderHIstory);
        
        var orders = Meteor.user().profile.orderHIstory;
        
        for (var i = 0; i < orders.length; i++) {
        	allorder.push(Order.findOne(orders[i]));
        };

        console.log(allorder);


        //prods = order.productOrder;
/*
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
   */     
        console.log(ret);
        
        return allorder;


    }

});

Template.eachProduct.helpers({
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

Template.eachorder.helpers({
	orderID : function(){
		return this._id
	},
	products :function(){
        //need to display the products in the current order 
        var prods = [];
        var ret = [];
        
        var order = Order.findOne({_id :this._id });
        prods = this.productOrder;

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
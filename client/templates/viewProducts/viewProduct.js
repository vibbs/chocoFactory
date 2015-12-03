if (Meteor.isClient) {

Template.viewProduct.helpers({
	products : function(){
		return Products.find();
	}
});

Template.allProducts.helpers({
	help : function(){
		console.log(this.media_file_id)
	}
});

Template.allProducts.events({
	'click .saveProd' : function(event, template){
		console.log("save click");

		var name = template.find("#name").value;
		var desc = template.find("#desc").value;
		var prize = template.find("#prize").value;
		var qty = template.find("#qty").value;

		console.log(name);
        console.log(desc);
        console.log(prize);
        console.log(qty);
        console.log(this._id);

        var bool = false;

		var file    = document.querySelector('input[type=file]').files[0];
		//accept="image/gif, image/jpeg, image/png" --will be usefull in future

		
        var fileObj;
        //story object: makes better data structure:
        //creator_id : user_id,
		if (file) {
             fileObj = Media.insert(file);
        }

        if((name == null||name == "")
        	&&(desc == null||desc == "")
        	&&(prize == null||prize == "")
        	&&(qty == null||qty == "")){
        	alert("All flieds must be filled");
        }
	    else{
	    	if($.isNumeric(qty)){
	    		if($.isNumeric(prize)) bool = true;
	    	}else
	    	alert("QTY OR prize must be numeric");

	    }

       
       if(bool) 
       		Meteor.call('updateProduct',this._id,name,desc,prize, qty, fileObj); 
  
        Router.go('viewProduct');
		

	},
	'click .delProd' : function(){
		Meteor.call('removeProduct', this._id);
		alert("Product Removed!");
	}

});

}
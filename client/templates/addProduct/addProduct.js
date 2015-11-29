

if (Meteor.isClient) {
Template.addProduct.helpers({
	


});

Template.addProduct.events({
	'click .submitProduct': function (event, template) {
		console.log("addProduct submitted");

		var name = template.find("#name").value;
		var desc = template.find("#desc").value;
		var prize = template.find("#prize").value;
		var qty = template.find("#qty").value;

		var bool = false;

		var file    = document.querySelector('input[type=file]').files[0];
		//accept="image/gif, image/jpeg, image/png" --will be usefull in future

        console.log(name);
        console.log(desc);
        console.log(prize);
        console.log(qty);
		
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
       		Meteor.call('insertProduct',name,desc,prize, qty, fileObj); 
  
        Router.go('viewProduct');

	}
	


});

}


Template.home.helpers({
	top : function () {
		var objarr = Story.find().fetch();
		console.log(objarr);
		objarr.sort(function(a, b) {
    		return parseFloat(b.like_count) - parseFloat(a.like_count);
		});
		return objarr.slice(0,5);
	},
	feed : function(){
		var res = [];
		Meteor.call("searchTwitter", "#katha", function(err,result) {
    		if(err) {
       		 alert("Something Went wrong in twitter connection");
    		}else
    		console.log("result");
    	
    		for (var i = 0; i < result.data.statuses.length; i++) {
    			var obj = {
    				text : result.data.statuses[i].text
    			}
    		
    			res.push(obj);
    			console.log(res);
    			return res;
    		};
    			


    		//return result.data.statuses;
		});
		
		
	},
	products : function(){
		return Products.find();
	}
});

Template.home.events({
	'click #startButton' : function(){
		if(!Meteor.userId()){
			alert("You need to login to use this function!");
		}
	}
});
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


Template.ImageList.helpers({
	arr : function(){
		var path = new Array();
		 
		// LIST OF IMAGES
		path[0] = {img:"/images/pi11.jpg"};
		path[1] = {img:"/images/pic1.jpg"};
		path[2] = {img:"/images/pic-4.jpg"};
		path[3] = {img:"/images/pic10.jpg"};
		path[4] = {img:"/images/pic12.jpg"};
		path[5] = {img:"/images/pic13.jpg"};
		path[6] = {img:"/images/pic14.jpg"};
		path[7] = {img:"/images/pic2.jpg"};
		path[8] = {img:"/images/pic3.jpg"};
		path[9] = {img:"/images/pic5.jpg"};
		path[10] = {img:"/images/pic6.jpg"};
		path[11] = {img:"/images/pic7.jpg"};
		path[12] = {img:"/images/pic8.jpg"};
		path[13] = {img:"/images/pic9.jpg"};

	}
});
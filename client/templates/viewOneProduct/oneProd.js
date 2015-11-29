


Template.oneProd.helpers({
	count : function(){
		
		return Session.get('counter');
	}

});


Template.oneProd.events({
	'click .plus' : function(events,template){
		if (Session.get('counter')<this.qty) 

		Session.set('counter', Session.get('counter') + 1);

		//Session.set('qty', Session.get('qty') - 1);
		

	},
	'click .minus' : function(events,template){
		if (Session.get('counter')>0) 
		Session.set('counter', Session.get('counter') - 1);
		//Session.set('qty', Session.get('qty') + 1);
	}


});
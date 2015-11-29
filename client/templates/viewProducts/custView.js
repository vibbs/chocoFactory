Template.custView.helpers({
	products : function(){
		return Products.find();
	}
});

Template.custView.events({

});

 


Template.thisProd.helpers({

});


Template.thisProd.events({
	'click .prodclick' : function (){
		Session.set('counter',0);
		Router.go('oneProd', {_id: this._id});
	}


});
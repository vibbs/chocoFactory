Template.supplyOrder.helpers({
	so : function  () {
		return Supply.find();
	}

});

Template.supplyOrder.events({
	'click .submitSO' : function (events, template) { 
		var item = template.find('#item').value;
		var qty = template.find('#qty').value;
		var supplier = template.find('#supplier').value;


		Meteor.call('insertSO', item, qty, supplier);
		alert("Supply Order Has been placed");
	}
});

Template.eso.helpers({
	rec : function(){
		return this.recieved ? 'Recieved' : 'Not-Recieved';
	}
});

Template.eso.events({
	'click .status' : function (events, template){
		this.recieved ? Meteor.call('changeSSO', this._id, false) : Meteor.call('changeSSO', this._id, true);
	},
	'click .del' : function(events, template){
		this.recieved ? Meteor.call('removeSO', this._id) : alert("SupplyOrder not yet received!");
	}
	
});
Meteor.publish('product', function(){
	return Products.find();
});
Meteor.publish('media', function(){
	return Media.find();
});

Meteor.publish('production', function(){
	return Production.find();
});

Meteor.publish('supply', function(){
	return Supply.find();
});


Meteor.publish('menu', function(){
	return Menu.find();
});

Meteor.publish('order', function(){
	return Order.find();
});

Meteor.publish("users", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});
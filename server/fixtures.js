if(Production.find().count() == 0){ 	
			var obj = Order.find().fetch();
			console.log("obj123"+obj[0]);
			console.log(obj[0]);
			
			for (var i = 0; i < obj.length; i++) {


				if(i == 0){
					Meteor.call('insertPS', obj[i]._id);
				}
				else{
					Meteor.call('addOrderID', obj[i]._id);
				}
			}
}
	

if(Menu.find().count() == 0) {

	var customMenu = [
		{
			name : "Cake1",
			prize : "20"
		},
		{
			name : "Cake2",
			prize : "20"
		},
		{
			name : "Cake3",
			prize : "20"
		},
		{
			name : "Cookie1",
			prize : "20"
		},
		{
			name : "Cookie2",
			prize : "20"
		},
		{
			name : "Cookie3",
			prize : "20"
		},
		{
			name : "Cookie4",
			prize : "20"
		}
	];

	for( var i = 0; i < customMenu.length; i ++) {
		Menu.insert(customMenu[i]);
	}

	
}
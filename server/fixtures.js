

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
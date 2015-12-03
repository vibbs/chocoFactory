var i = 0;
		var path = new Array();
		 
		// LIST OF IMAGES
		path[0] = "/images/pi11.jpg";
		path[1] = "/images/pic1.jpg";
		path[2] = "/images/pic-4.jpg";
		path[3] = "/images/pic10.jpg";
		path[4] = "/images/pic12.jpg";
		path[5] = "/images/pic13.jpg";
		path[6] = "/images/pic14.jpg";
		path[7] = "/images/pic2.jpg";
		path[8] = "/images/pic3.jpg";
		path[9] = "/images/pic5.jpg";
		path[10] = "/images/pic6.jpg";
		path[11] = "/images/pic7.jpg";
		path[12] = "/images/pic8.jpg";
		path[13] = "/images/pic9.jpg";

		function swapImage()
		{
		   document.slide.src = path[i];
		   if(i < path.length - 1) i++; else i = 0;
		   setTimeout("swapImage()",3000);
		}
		window.onload=swapImage;
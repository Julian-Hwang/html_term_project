var image=['Dockericon.jpg', 'CSSicon.jpg', 'html5icon.jpg'];


function imgchange(){
	var img = image[Math.floor(Math.random() * 3)];
	document.getElementById("img").src = img;
}


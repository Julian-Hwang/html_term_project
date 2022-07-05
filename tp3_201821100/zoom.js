var nowzoom = 100;
		
function zoomout(){
	nowzoom = nowzoom - 20;
	if(nowzoom <= 80)
		nowzoom = 80;
	zooms();
}

function zoomin(){
	nowzoom = nowzoom + 20;
			
	if(nowzoom >=120)
		nowzoom = 120;
	zooms();
}

function zoomreset(){
	nowzoom = 100;
	zooms();
}

function zooms(){
	document.body.style.zoom = nowzoom + '%';
}

function change(color)
{
	document.body.style.background=color;
}

function mouse_zoomin(event) {
	event.target.style.transform = "scale(1.2)";
	event.target.style.zIndex = 1;
	event.target.style.transition = "all 0.5s";
}
function mouse_zoomout(event) {
	event.target.style.transform = "scale(1)";
	event.target.style.zIndex = 0;
	event.target.style.transition = "all 0.5s";
}
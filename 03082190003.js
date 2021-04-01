var x=100, y=150;

function pos(dx,dy){
	if(!document.getElementById) return;
	x +=30*dx;
	y +=30*dy;
	
	obj = document.getElementById("kotak");
	obj.style.top= y +"px";
	obj.style.left= x +"px";
}

function getNama(){
	document.write("<b><i>Nama</i></b>");
}

function hide(){
	var sembunyi = document.getElementById("kotak");
	sembunyi.style.display = "none";
}

function show(){
	var cilukba = document.getElementById("kotak");
	cilukba.style.display = "block";
}



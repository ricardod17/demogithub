var x=100, y=150;

function pos(dx,dy)
{
	if(!document.getElementById) return;
	x += 30*dx;
	y += 30*dy;
	
	obj = document.getElementById("kotak");
	obj.style.top = y + "px";
	obj.style.left = x + "px";
}

function getNama()
{
	document.write("<b><i>Jarvis Andriano</i></b>");
}

function showHide()
{
  var x = document.getElementById("kotak");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
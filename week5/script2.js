function change(e){
	var x = document.getElementById('bigImage');
	x.getElementsByTagName('img')[0].src = e.currentTarget.src;
	console.log("success");
}
var y = document.getElementsByTagName('img');

for (var i = 0; i < y.length; i++) {
	y[i].addEventListener("click",change,false);
}
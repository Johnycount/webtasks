function res() {
	var x=['s11','s12','s13','s21','s22','s23','s31','s32','s33'];
	var y=[];
	for(var i=0; i<9; i++){
		y[i]=(parseInt(document.getElementById(x[i]).value));

	}
	var resultat= ((y[0]*y[4]*y[8])+(y[1]*y[5]*y[6])+(y[3]*y[7]*y[2]))-((y[2]*y[4]*y[6])+(y[3]*y[1]*y[8])+(y[0]*y[5]*y[7]));
	console.log(result);
	document.getElementById("result").innerHTML = resultat.toString();

}
document.getElementById("determinant").addEventListener("click", res);


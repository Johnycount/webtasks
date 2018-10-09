function addStudent(){
	var Name = document.getElementById('name').value;
	var Surname = document.getElementById('surname').value;
	var selectFac = document.getElementById('faculty');
	var faculty = selectFac.options[selectFac.selectedIndex].text;

	if (Name != "" && Surname != "" && selectFac.selectedIndex != 0) {
		var table = document.getElementById('students');
		var row = table.insertRow();
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell3.setAttribute("style","font-weight: bold;");

		cell1.innerHTML = Name;
		cell2.innerHTML = Surname;
		cell3.innerHTML = faculty;

		document.getElementById('name').value = '';
		document.getElementById('surname').value = '';
		document.getElementById('faculty').value = -1;
	}
	else{
		if (Name == "") {
			document.getElementById('name').className = "error";
		}
		if (Surname == "") {
			document.getElementById('surname').className = "error";
		}
		if (selectFac.selectedIndex == 0) {
			document.getElementById('faculty').className = "error";
		}
	}
}

function clear(){
	this.className = "";
}

var button = document.getElementById('addStudent');
button.addEventListener("click",addStudent);
document.getElementById('name').addEventListener("focus",clear);
document.getElementById('surname').addEventListener("focus",clear);
document.getElementById('faculty').addEventListener("focus",clear);

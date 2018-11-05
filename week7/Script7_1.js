
let sportNews= document.getElementById('sport');
let politicsNews= document.getElementById('politics');
let bussinessNews= document.getElementById('bussiness');

function load(data){
	let obschyi = document.getElementById('news')
	news.innerHTML = data;
}
function durysbolsa(response){
	response.text().then(load);
}

function firstclick(){
	fetch("http://demo4296963.mockable.io/news-sport").then(durysbolsa);

}
function secclick(){
	fetch("http://demo4296963.mockable.io/news-politics").then(durysbolsa);

}
function thirdclick(){
	fetch("http://demo4296963.mockable.io/news-bussiness").then(durysbolsa);

}
sportNews.addEventListener("click",firstclick);
politicsNews.addEventListener("click",secclick);
bussinessNews.addEventListener("click",thirdclick);
firstclick();
secclick();
thirdclick();


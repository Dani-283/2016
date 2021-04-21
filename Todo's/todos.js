var Lis=document.querySelectorAll("li");

for(var i=0;i<Lis.length;i++)
{
	Lis[i].addEventListener("mouseover",function(){
		this.classList.toggle("selected");
	});
	Lis[i].addEventListener("mouseout",function(){
		this.classList.toggle("selected");
	});
	Lis[i].addEventListener("click",function(){
		this.classList.toggle("list");
	});
}
//firstLi.addEventListener("mouseover",function(){
//	firstLi.style.background="green";
//});
//firstLi.addEventListener("mouseout",function(){
//	firstLi.style.background="white";
//});

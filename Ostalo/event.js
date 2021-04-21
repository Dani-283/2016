var but = document.getElementsByTagName("button")[0];

var body = document.getElementsByTagName("body")[0];

but.addEventListener("click", function () {
  if (body.style.background === "white") {
    body.style.background = "pink";
  } else {
    body.style.background = "white";
  }
});
/*if (body.style.background="white")
{
	but.addEventListener("click",changePink);
}
else
{
	but.addEventListener("onclick",changeWhite);
}

function changePink()
{
	body=document.getElementsByTagName("body")[0];
	body.style.background="pink";
}
function changeWhite()
{
	body=document.getElementsByTagName("body")[0];
	body.style.background="white";
}*/

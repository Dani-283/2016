var age=Number(prompt("How old are you?"));
if (age<0){
	alert("M8 that's a negative number");

}
else if (age===21){
	alert("Happy birthay dude!");

}
else if ((age%2)!=0){
	alert("Your age is odd");
}
else if((Math.sqrt(age)%Math.sqrt(age))==0){
	alert("Perfect square!");
}
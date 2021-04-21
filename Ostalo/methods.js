var obj = {
  name: "Chuck",
  age: 45,
  friends: ["bob", "tina"],
  add: function (x, y) {
    return x + y;
  },
};

var dogSpace = {};
dogSpace.speak = function () {
  return "WOOF!";
};
var catSpace = {};
catSpace.speak = function () {
  return "Meow";
};

var comments = {
  data: ["boy", "ou boi"],
};
function print(arr) {
  arr.data.forEach(function (com) {
    console.log(com);
  });
}
//ili
// comments.print= function ()
// {
// 	this.data.forEach(function(com){
// 		console.log(com);
// 	});
// }

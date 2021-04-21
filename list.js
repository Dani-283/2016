var todos = [];
var input = prompt("what would you like to do?");

while (input !=="quit")
{
if (input === "list")
{
	listTodos();
	
}
else if(input ==="new")
{
	newTodo();
	
}
else if (input ==="delete")
{
	deleteTodo();
}
input = prompt("what would you like to do?");
}
function listTodos()
{
	todos.forEach(function(order,i)
	{
		console.log(i +": " +order);
	})
}
function newTodo()
{
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added todo");
}
function deleteTodo()
{
	var i=prompt("Enter which item you want to delete");
	delete(todos[i]);
	//todos.splice(index,1);
	console.log("Deleted todo");
}
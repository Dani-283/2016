function sumArray(arr)
{
	var sum=0
	//for (var i=0 ; i<arr.length;i++)
	//{
		
	//	sum=arr[i]+sum;
	//}
	//console.log(sum);//
	arr.forEach(function(i)
	{
		sum=i+sum;
	})
	console.log(sum);
}

function max (arr)
{
	var biggest=arr[0];
	for (i=1; i<arr.length;i++)
	{
		if (biggest < arr[i])
		{
			biggest=arr[i];
		}
	}
	console.log(biggest);
}


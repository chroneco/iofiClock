function clocking()
{
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = make2Digit(m);
	h = make2Digit(h);
	var s = today.getSeconds();
	var separator = ":";
	if(s%2==0)
	{
		separator = " ";
	}
	document.getElementById('time').innerHTML = h+separator+m;	
	
	var t = setTimeout(function(){clocking()},100);
}

function make2Digit(i)
{
	if(i<10)
	{
		i = "0"+i;
	}
	return i;
}
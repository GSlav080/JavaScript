function NAME(a) 
	{
	let name, fername, l;
	a = a.replace(/\s+/g, ' ')
	if (a.replace(/[^ ]/g, "").length+1 == 3 )
		{
		fername = a.slice(0, a.indexOf(' '))+ ' ';
		a = a.slice(a.indexOf(' ')+1,)
		name = a.slice(0, 1)+ '.';
		l = a.slice(a.indexOf(' ', a.indexOf(' ')),(a.indexOf(' ', a.indexOf(' '))+2))+'.';
		alert(fername + name + l);
		}
	else alert('Неверно введена строка')	
	}








let a = prompt('Фамилия имя отчество: ');
NAME(a)




function getRandomInt(min, max) 
    {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    }

 
let A = +prompt('N: ' ), i = 0, list = [], il;
while(i !== A)
	{
		il = getRandomInt(1, A+1)  
		if (list.indexOf(il) == -1)
		{
			list.push(il);
			i += 1
		}
	}
alert(list)
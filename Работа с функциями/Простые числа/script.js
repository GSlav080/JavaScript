function getRandomInt(min, max) 
    {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    }


function pravda(l)
    {   let Flag = true;
        for (let j = 2; j < l; j++)
            {if (l % j === 0) Flag = false;}
        if (Flag)
            {return true}


    }



function funk (lens)
    {  let ar = [];
        for (let i =1; i <lens.length; i ++)
            {  if(pravda(lens[i]))
                {
                    if (ar.indexOf(lens[i]) == -1 )
                        {
                            ar.push(lens[i])
                        }
                }

            }
        return ar
    }

let lens = [];
for (let i = 1;i<=100; i++)
{   
    lens.push(getRandomInt(1, 100))
}
ar = funk(lens).sort()
alert(ar)


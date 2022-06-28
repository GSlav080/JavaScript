function coun(list)
{   let list_count = []
    list = list.toLowerCase().replace(/[^A-Za-zА-Яа-яЁё]/g, " ").replace(/\s+/g, ' ').trim().split(' ')
    for (let i = 0; i < list.length; i++)
    {   let st
        st = list[i]
        if (list_count.indexOf(st) == -1)
        {   
            let count = 0
            for (let j = 0; j < list.slice([i+1, list.length]).length; j++)
                {
                    if (st == list[j])
                    {count++}
                }
            list_count.push(st, count)
        }
        
    };
    let mass = [];
    for (let i = 0; i < list_count.length; i+=2)
        {
            mass.push(`[${list_count[i]}, ${list_count[i+1]}]`)
        }
    return mass
}


function rep(list)
{   
 return list.replace(/\s+/g, ' ').trim()

}


let a = prompt();
alert(coun(rep(a)))
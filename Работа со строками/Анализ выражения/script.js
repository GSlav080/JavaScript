let list, a, b, c;
list ='+4,1x^2+5x+3-5x^2=0';
list = list.replace(/\s/g, ''); 
list = list.replace(',', '.');
list = list.replace('x2', 'x^2');
let i, num, list1, z, y=0;
list1 = ''
for(i=0; i<=(list.length)-1; i++)
    {
        list1 += list[i]
        // alert(list1)
        if (list1.indexOf('+') != -1 || list1.indexOf('-') != -1 || list1.indexOf('=') != -1)
        { for(y, y<(list.length)-1; y++)
            {list1 = list1.slice(0, -1)
            z = list1
            list1=''+num
            alert(z)}
        }
    }
// alert(typeof(a));
// alert(a);
// alert(list)
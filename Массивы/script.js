let a =[];
for (let i =1; i<=7; i++)
    {
        a.push(i)
    }
    a.shift()

let str=2;
while (str != 0)
    {
        str = +prompt('Число')
        a.shift()
        a.push(str)
        alert(a)
    }
str = 1
while (str != 0)
{
    str = +prompt('Число')
    a[7] = str
    alert(a)
}
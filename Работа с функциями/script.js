function login (lg, lging)
    {  
        (lging.indexOf(lg) == -1) ? Flag = false: Flag = true;
        return Flag
    }
let lens = [];
for (let i = 10;i<=100; i++)
{   
    lens.push(String(i));
}
otvet = login(prompt('Логин'), lens)

alert(otvet)
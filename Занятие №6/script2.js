
let Sum 
Sum = +prompt('Сумма', '0');
if (Sum == 0  || Sum == NaN){Sum == 0};

if (Sum == 0){alert('Нет суммы')}

else
    {let a=Math.floor(Sum/1), b = Sum - a ;
        alert(a)
        alert(b)
    }
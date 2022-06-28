let a   ;
a = +prompt('Оценка: ');
if (a <= 1 || a > 5)
    {
        alert('Значение введено значение')
    }
else    
    {
        if (a == 2)
            {
                alert('Плохо')
            }
        else if (a==3)
            {
                alert('Нормально')
            }
        else if (a == 4)
            {
                alert('Хорошо')
            }
        else   
            {
                alert('Отлично')
            }
    
    }
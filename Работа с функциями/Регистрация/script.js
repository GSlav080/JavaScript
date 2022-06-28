let users = [], n;

function proverka(login)
    {   len = users.length

        for (let j = 0; j < len; j++)
        {
            let arr = users[j];
            
            if (login == arr[0]) return false;
            
        };
        return true;
    }


function register(count)
    {   
        for(let i= 0; i<count; i ++)
        
            {   
                let user = [], login, passvord;
                let Flag = true;
                
                while (Flag)
                    {   
                        login = prompt('Логин: ');

                        if ((login !== '') && (login !== null) &&(proverka(login)== true) )
                        {
                                passvord = prompt('Введите пароль: ')

                                if ((passvord != '') && (login !== undefined))
                                        {
                                            user.push(login, passvord)
                                            Flag = false
                                        }
                                else alert('Авторизация отменена')
                        }
                        else alert('Авторизуйтесь!')
                    };  
                users.push(user)
            }
        
        {return users}
    };

let users_mass = register(+prompt('Количество авторизаций: '));

function Sort(mass, up, now)
{
    for(let i = 0; i<mass.length-1; i++)
        {for(let j = 0; j<mass.length; j++)
        {
            if (mass[i][now]>mass[j][now])
            {
                let temp = 0;
                temp = mass[i]
                mass[i] = mass[j]
                mass[j]  = temp
            }
        }
        
        }
    if (up ==  1) {return mass.reverse()}

    else {return mass}
}


function FORMAT(massiv)
{   let str = '';
    for(let i = 0; i<massiv.length; i++)
    {
       str += (`[${massiv[i]}], `)
    } 
    alert(str)
}

FORMAT(Sort(users_mass, +prompt('0-сортировка вниз\n1-сортировка вверх'), +prompt('0-сортировка по логину\n1-сортировка по паролю')))

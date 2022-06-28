function Sort(mass, up, now)
{
    for(let i = 0; i<m.length-1; i++)
        {for(let j = 0; j<m.length; j++)
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






let m = [['Иван', 'dwqaed3q2dw'], ['Пётр', 'wqf32'],['Саша', '321d'],['Ира', 'Gdjsafqwh331'],];

alert(Sort(m, 0, 0))
alert(Sort(m, 1, 0))
alert(Sort(m, 0, 1))
alert(Sort(m, 1, 1))

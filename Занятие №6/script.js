let a, b, c , D, x1, x2;
alert('Программа для решения квадратных уравнений вида\n ax^2 + bx +c = 0');
a = +prompt('Коэфициент a');
b = +prompt('Коэфициент b');
c = +prompt('Коэфициент c');

if (a == 0){a = 0}
if (b == 0){b = 0}
if (c == 0){c = 0}

if (a === 0 && b !== 0)
   {x1 = -c/b;
    alert(`Уравнение приобрело линейный вид \nкорень уравнения: \n ${x1}`)
    }
else if (a !== 0 && b !== 0)
    {
    D = b **2 - 4*a*c;
    if (D>0)
        {
        x1 = (-b + Math.sqrt(D))/(2*a)
        x2 = (-b - Math.sqrt(D))/(2*a)
        alert(`Корни уравнения \nx1=${x1} \nx2=${x2}`)
        }
    if (D === 0)
        {
        x1 = (-b + Math.sqrt(D))/(2*a)
        alert(`Корень уравнения \nx1=${x1}`)
        }
    if (D < 0)
        {alert('Нет корней')}
    }
else {alert('Уравнение не имеет смысла')}
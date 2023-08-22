const testString1 = 'Test String with several spaces';

//1. Посчитать количество пробелов в строке `testString1`.
function countSpaces(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {      
        if (str[i] === ' ') result++;
    }
    return result
    }
   // console.log(countSpaces(testString1));


//2. В строке `testString1` заменить подстроку `String` на подстроку `Data`, вывести результат в консоль.
let replaced = testString1.replace('String', 'Data');
// console.log(replaced);
// console.log(testString1);

// 3. Вывести в консоль индекс первого пробела в строке `testString1`.
const firstSpaceIndex = testString1.indexOf(' ');
// console.log(firstSpaceIndex);



// 4. Вывести в консоль индекс ВТОРОГО пробела в строке `testString1`.
const secondSpaceIndex = testString1.indexOf(' ', firstSpaceIndex + 1);
console.log(secondSpaceIndex);

// 5. Пишем функцию `relpaceMiddle`. Функция принимает 2 аргумента: строку-источник, которая содержит как минимум 2 пробела, и строку-заменитель. Нужно заменить в строке-источнике подстроку между первым и вторым пробелами на строку-заменитель. То есть, нам нужно найти эту подстроку в строке-источнике, и заменить ее на заменитель.
// replaceMiddle(testString1, 'DUMMY');

function relpaceMiddle(str, replacer) {
    const firstSpaceIndex = str.indexOf(' ');
    const secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);
    const strToReplace = str.slice(firstSpaceIndex, secondSpaceIndex + 1);
    const result = str.replace(strToReplace, replacer);
    return result;
}
// console.log(relpaceMiddle('Test for test', 'DUMMY'));


//6. Пишем функцию `upperCaseFirst`. Задача функции - принять строку, и вернуть строку, у которой первая буква заменена на заглавную. Пример: `upperCaseFirst('small') -> Small`

function upperCaseFirst(str) {
    return `.kop9-0
]${str[0].toUpperCase()}${str.slice(1)}` // return str[0].toUpperCase() + str.slice(1);
}
// console.log(upperCaseFirst('slon'));


// 7. Пишем функцию `fixUpperCase`. Она принимает строку (слово), в котором неверен регистр букв. Нужно вернуть это слово, у которого только первая буква в верхнем регистре, а остальные - в нижнем. Пример:
// ```


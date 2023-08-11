const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 160
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 180
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 210
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];


/*создать переменную `demoButton`, и записать в нее ссылку на кнопку с ID=demoButton */
const demoButton = document.querySelector('#demoButton');
/*добавить к кнопке класс `button`*/
demoButton.classList.add('button');
/*создать переменную demoinputs и записать в нее ссылку на все инпуты на странице */
const demoInputs = document.querySelectorAll('input')
/* для всех инпутов добавить класс input */
for (let i = 0; i < demoInputs.length; i++) {
    demoInputs[i].classList.add('input');
}
/*сделать инпут с классом `styledInput` "закрытым" для ввода. Для этого нам понадобится использовать атрибут `disabled`*/
const styledInput = document.querySelector('.styledInput');
styledInput.setAttribute('disabled', true)
   
/*Добавляем на кнопку обработчик клика. Задача обработчика - вывести в консоль текст "Кнопка нажата!".*/
demoButton.addEventListener('click', () => {
    console.log("Pressed by clickHandler");
})

/*Изменяем наш обработчик. Теперь, задача нашего обработчика - управлять классом `input` у инпута с ID=nameInput. Нужно, если у инпута есть класс `input` - то удалять этот класс, а если его нет - то добавлять. Для этого есть специальный метод у свойства `classList`. */
const nameInput = document.querySelector('#nameInput');
demoButton.addEventListener('click', () => {
    nameInput.classList.toggle('input');
});

/*
Добавляем обработчик на событие ввода (`keydown`) в наш инпут с ID=nameInput. Нужно, чтобы при нажатии на клавишу, в консоль выводилось сообщение `key pressed!` 
*/
// nameInput.addEventListener('keydown', () => {
//     console.log("key pressed");
// })

/*
Усложняем обработчик из п.4. Теперь нужно в консоль выводить такое: `Current input value is: ЗНАЧЕНИЕ_ИНПУТА`. Здесь нам нужно работать с объектом Event, который ожидается первым аргументом в нашей функции.
*/
nameInput.addEventListener('keyup5', () => {
        console.log("Current input value is: " + event.target.value);
})
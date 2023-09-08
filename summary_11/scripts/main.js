// Здесь пока ничего нет - и нам предстоит это исправить!



//2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.

const delayInput = document.querySelector('#delayTime');
const delayBtn = document.querySelector('#delayStart');

delayBtn.addEventListener('click', () => {
    const delayTime = delayInput.value;
    if (delayTime) {
        setTimeout( () => {
            console.log('Delayed by ' + delayTime);
        }, delayTime * 1000);tex
});
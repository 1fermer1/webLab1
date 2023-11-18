function setXValue(button) {
    var xValueInput = document.getElementById('x_value');
    xValueInput.value = button.value;

    // Удаляем класс у всех кнопок
    var buttons = document.querySelectorAll('.x_value button');
    buttons.forEach(function(btn) {
        btn.classList.remove('orange-button');
    });

    // Добавляем класс только к нажатой кнопке
    button.classList.add('orange-button');

    console.log('X Value set to: ' + button.value);
}

function resetXvalue() {
    document.getElementById('x_value').value = '';

    // Удаляем класс у всех кнопок
    var buttons = document.querySelectorAll('.x_value button');
    buttons.forEach(function(btn) {
        btn.classList.remove('orange-button');
    });
}
const elems = document.querySelectorAll('.btn_group button');
const xInput = document.querySelector('#x_value');

elems.forEach(element => {
   element.onclick = selectX;
});

function selectX() {
    if (xInput.value === this.value) {
        this.classList.remove('selected');
        xInput.value = '';
    } else {
        let selectedElems = document.querySelectorAll('.selected');
        selectedElems.forEach(element => {
            element.classList.remove('selected');
        });
        xInput.value = this.value;
        this.classList.add('selected');
    }
}

function setXValue(button) {
    let xValueInput = document.getElementById('x_value');

    if (xValueInput.value === button.value) {
        resetXvalue();
        return;
    }

    xValueInput.value = button.value;

    // Удаляем класс у всех кнопок
    let buttons = document.querySelectorAll('.x_value button');
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
    let buttons = document.querySelectorAll('.x_value button');
    buttons.forEach(function(btn) {
        btn.classList.remove('orange-button');
    });
}


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

function checkInput() {
    let yValue = document.querySelector('#y_value');
    yValue.classList.remove('error');
    if (yValue.value.includes(',')) {
        yValue.value = yValue.value.replace(',', '.');
    }
    if (yValue.value.indexOf('.') === -1) {
        return;
    }
    if (yValue.value.length - yValue.value.indexOf('.') > 11) {
        yValue.value = yValue.value.slice(0, yValue.value.indexOf('.') + 11);
        yValue.classList.add('error');
    }
}

function cleanInput() {
    let selectedElems = document.querySelectorAll('.selected');
    selectedElems.forEach(element => {
        element.classList.remove('.selected');
    });
    selectedElems = document.querySelectorAll('.error');
    selectedElems.forEach(element => {
        element.classList.remove('error');
    });
    document.querySelector('.validation_info').classList.remove('show');
    document.querySelector('.validation_info').innerHTML = '';
    resetXvalue();
    xInput.value = '';
    document.querySelector('#r_value').value = '';
    changeR();
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

function changeR() {
    let rField = document.querySelector('#r_value');
    if (rField.value === '') {
        document.querySelectorAll('#r').forEach(element => {
            element.innerHTML = 'R';
        });
        document.querySelectorAll('#-r').forEach(element => {
            element.innerHTML = '-R';
        });
        document.querySelectorAll('#r2').forEach(element => {
            element.innerHTML = 'R/2';
        });
        document.querySelectorAll('#-r2').forEach(element => {
            element.innerHTML = '-R/2';
        });
    } else {
        let rInt = parseInt(rField.value);
        document.querySelectorAll('#r').forEach(element => {
            element.innerHTML = rInt.toString();
        });
        document.querySelectorAll('#-r').forEach(element => {
            element.innerHTML = (-rInt).toString();
        });
        document.querySelectorAll('#r2').forEach(element => {
            element.innerHTML = (rInt / 2).toString();
        });
        document.querySelectorAll('#-r2').forEach(element => {
            element.innerHTML = (-rInt / 2).toString();
        });
    }
}
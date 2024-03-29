function validateValues(x, y, r) {
    let validationInfoBox = document.querySelector('.validation_info');
    validationInfoBox.innerHTML = '';
    validationInfoBox.classList.remove("show");

    let validationInfo = '';
    let xValidationSuccess = false;
    let yValidationSuccess = false;
    let rValidationSuccess = false;
    let validationSuccess;

    if (x === undefined || x === '') {
        validationInfo += "<span>Не выбрано значение X!</span>";
    } else {
        let parsedX = Number(x);
        if ((parsedX >= -3) && (parsedX <= 5)) {
            xValidationSuccess = true;
        } else validationInfo += "<span>Координата X задается числом в промежутке [-3..5]!</span>";
    }

    if (!(y.trim() === '')) {
        let parsedY = Number(y);
        if (!isNaN(parsedY)) {
            if ((parsedY > -3) && (parsedY < 5)) {
                yValidationSuccess = true;
            } else validationInfo += "<span>Координата Y задается числом в промежутке (-3..5)!</span>";
        } else validationInfo += "<span>Координата Y задается числом!</span>";
    } else validationInfo += "<span>Не введена координата Y!</span>";

    if (yValidationSuccess) {
        document.querySelector('#y_value').classList.remove('error');
    } else {
        document.querySelector('#y_value').classList.add('error');
    }

    if (r === null || r === '') {
        validationInfo += "<span>Не выбрано значение R!</span>";
    } else {
        rValidationSuccess = true;
    }

    validationSuccess = xValidationSuccess && yValidationSuccess && rValidationSuccess;

    if (!validationSuccess) {
        document.querySelector('.validation_info').innerHTML = "<br>" + validationInfo + "<br>";
        validationInfoBox.classList.add("show");
    }

    return validationSuccess;
}
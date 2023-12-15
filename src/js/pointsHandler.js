function onClickPoint(event) {
    if (document.querySelector('#r_value').value !== '') {
        document.querySelector('#x_value').value = (event.offsetX - 200) / 32;
        document.querySelector('#y_value').value = (200 - event.offsetY) / 32;

        receiveSubmit();
        // alert("offsetX = " + event.offsetX + ", offsetY = " + event.offsetY
        //     + "\nclientX = " + event.clientX + ", clientY = " + event.clientY
        //     + "\nx = " + document.querySelector('#x_value').value + ", y = " + document.querySelector('#y_value').value);
    }
}
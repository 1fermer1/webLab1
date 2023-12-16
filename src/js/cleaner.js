function cleanTable() {
    let tBody = document.querySelector('#table > tbody');
    tBody.innerHTML = '';
    $.ajax({
        type: "GET",
        url: "../src/php/server.php",
        data: {'clear': "0"},
        error: function (data) {
            console.log(data);
        }
    });
    cleanPoints();
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
    document.querySelector('#x_value').value = '';
    document.querySelector('#r_value').value = '';
    changeR();
}

function cleanPoints() {
    let circles = document.getElementsByTagName('circle');
    while (circles.length > 0) {
        circles[0].parentNode.removeChild(circles[0]);
    }
}
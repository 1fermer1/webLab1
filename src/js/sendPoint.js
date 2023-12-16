function receiveSubmit() {
    let xValue = document.querySelector('#x_value').value;
    let yValue = document.querySelector('#y_value').value;
    let rValue = document.querySelector('#r_value').value;

    const date = new Date();
    const offset = date.getTimezoneOffset();

    if (validateValues(xValue, yValue, rValue)) {
        $.ajax({
            type: "POST",
            url: "../src/php/server.php",
            dataType: 'json',
            data: {
                'x': parseFloat(xValue.trim()),
                'y': parseFloat(yValue.trim()),
                'r': parseFloat(rValue.trim()),
                'utc': offset
            },
            success: function (response) {
                document.querySelector('#table > tbody').innerHTML = response.data;

                let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', xValue * 32 + 200);
                circle.setAttribute('cy', 200 - yValue * 32);
                circle.setAttribute('r', 5);
                circle.setAttribute('fill', check_hit(xValue, yValue, rValue) ? "#008000" : "#FF0000");
                document.querySelector('svg').appendChild(circle);
            },
            error: function (data) {
                console.log(data);
            }
        });
    }
}

function check_hit(x, y, r) {
    if (x >= 0 && y >= 0 && x * x + y * y <= r * r / 4) {
        return true;
    }

    if (x <= 0 && y >= 0 && x >= -r / 2 && y < r) {
        return true;
    }

    return x >= 0 && y <= 0 && y >= x - r;
}
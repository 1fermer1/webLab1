function getTable() {
    $.ajax({
        type: "GET",
        url: "../src/php/server.php",
        async: false,
        success: function (response) {
            document.querySelector('#table > tbody').innerHTML = response;
        },
        error: function (data) {
            alert(data);
        }
    });
}

function cleanTable() {
    let tBody = document.querySelector('#table > tbody');
    tBody.innerHTML = '';
    $.ajax({
        type: "GET",
        url: "../src/php/cleaner.php",
        async: false,
        error: function (data) {
            alert(data);
        }
    });
}
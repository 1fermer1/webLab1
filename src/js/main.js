function init() {
    getTable();
}

function getTable() {
    $.ajax({
        type: "GET",
        url: "../src/php/server.php",
        data: {'update': "0"},
        dataType: 'json',
        success: function (response) {
            document.querySelector('#table > tbody').innerHTML = response.data;
        },
        error: function (data) {
            console.log(data);
        }
    });
}
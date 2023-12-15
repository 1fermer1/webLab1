function changeR() {
    let rField = document.querySelector('#r_value');
    let rectangle, circle, triangle;
    if (rField.value === '') {
        rectangle = circle = triangle = "";
    } else {
        let r = 32 * rField.value;
        let halfR = 16 * rField.value;
        rectangle = `200 200, ${200 - halfR} 200, 
            ${200 - halfR} ${200 - r}, 200 ${200 - r}`;

        triangle = `200 200, ${200 + r} 200, 200 ${200 + r}`;

        circle = `M${200 + halfR},200 A${halfR},${halfR} 0 0,0 200,${200 - halfR} L200,200 Z`;
    }

    cleanPoints();

    $("#graph-rectangle").attr("points", rectangle);
    $("#graph-triangle").attr("points", triangle);
    $("#graph-circle").attr("d", circle);

    console.log('R Value set to: ' + "'" + rField.value + "'");
}
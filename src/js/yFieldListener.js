document.addEventListener('DOMContentLoaded', function () {
    let inputElement = document.getElementById("y_value");
    let lastValidValue = ''; // Хранит последнее корректное значение

    inputElement.addEventListener('input', function (event) {
        let inputValue = event.target.value;

        // Удаляем все символы, кроме цифр, точек и запятых
        let sanitizedValue = inputValue.replace(/[^\d.]/g, '');

        // Проверяем количество точек и запятых
        if ((sanitizedValue.match(/\./g) || []).length > 0 && (sanitizedValue.match(/\d/g) || []).length < 1 || (sanitizedValue.match(/\./g) || []).length > 1) {
            event.target.value = lastValidValue; // Восстанавливаем последнее корректное значение
        } else {
            event.target.value = sanitizedValue;
            lastValidValue = sanitizedValue; // Обновляем последнее корректное значение
        }
    });
});
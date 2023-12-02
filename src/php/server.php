<?php
function check_hit($x, $y, $r) {
    if ($x >= 0 && $y >= 0 && $x * $x + $y * $y <= $r * $r / 4) {
        return true;
    }

    if ($x <= 0 && $y >= 0 && $x >= -$r / 2 && $y < $r) {
        return true;
    }

    if ($x >= 0 && $y <= 0 && $y >= $x - $r) {
        return true;
    }

    return false;
}

date_default_timezone_set('UTC');

$start = microtime(true);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $filename = 'history.txt';

    // Проверка существования файла
    if (!file_exists($filename)) {
        // Создаем файл, если его нет
        file_put_contents($filename, '');
    }

    // Чтение из файла
    $history = file_get_contents($filename);

    exit($history);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    unlink('history.txt');

    $message = "Table cleaned successfully!";

    exit($message);
}

if (isset($_POST['x']) && isset($_POST['y']) && isset($_POST['r']) && isset($_POST['utc'])) {
    $x = $_POST['x'];
    $y = $_POST['y'];
    $r = $_POST['r'];
    $utc = $_POST['utc'];
    if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r) || !is_numeric($utc)) {
        http_response_code(400);
        exit("Only number must be passed");
    } else {
        $current_time = date("H:i:s", time() - $utc * 60);
        $checked_hit = check_hit($x, $y, $r) ? "True" : "False";

        $computation_time = number_format((microtime(true) - $start) * 1000000, 2, ".", "");

        $row = "<tr>
                    <th><time>$current_time</time></th>
                    <th><time>$computation_time</time></th>
                    <th>$x</th>
                    <th>$y</th>
                    <th>$r</th>
                    <th>$checked_hit</th>
                </tr>";

        $filename = 'history.txt';

        // Проверка существования файла
        if (!file_exists($filename)) {
            // Создаем файл, если его нет
            file_put_contents($filename, '');
        }

        // Чтение из файла
        $history = file_get_contents($filename);

        // Добавление новой строки в историю
        $history .= $row;

        // Запись в файл
        file_put_contents($filename, $history);

        http_response_code(200);
        exit($history);
    }
} else {
    http_response_code(400);
    exit("Some parameters are missing: x, y, r, utc expected.");
}
<?php
include 'handlers.php';

date_default_timezone_set('UTC');

$start = microtime(true);

$response = [];

session_start();

if (isset($_GET['update'])) {
    if (!isset($_SESSION['table'])) {
        $_SESSION['table'] = '';
    }

    $response = json_encode(array('data' => $_SESSION['table'], 'points' => $_SESSION['points'], 'last_r' => $_SESSION['last_r']));
    header('Content-Type: application/json');
    exit($response);
}

if (isset($_GET['clear'])) {
    $_SESSION['table'] = '';

    exit();
}

if (isset($_POST['x']) && isset($_POST['y']) && isset($_POST['r']) && isset($_POST['utc'])) {
    $x = $_POST['x'];
    $y = $_POST['y'];
    $r = $_POST['r'];
    $utc = $_POST['utc'];
    if (!validation($x, $y, $r, $utc)) {
        http_response_code(400);
        exit("Only number must be passed!\nAnd X is integer number like -3 <= X <= 5, \nY like -3 < Y < 5, \nR is integer number like 1 <= R <= 5");
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

        if (!isset($_SESSION['table'])) {
            $_SESSION['table'] = '';
        }

        $_SESSION['table'] = $row . $_SESSION['table'];
        $_SESSION['last_r'] = $r;
        $_SESSION['points'] = $_POST['points'];

        $response = json_encode(array('data' => $_SESSION['table']));
        header('Content-Type: application/json');
        http_response_code(200);
        exit($response);
    }
} else {
    http_response_code(400);
    exit("Some parameters are missing: x, y, r, utc expected.");
}
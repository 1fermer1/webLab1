<?php

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    unlink('history.txt');

    $message = "Table cleaned successfully!";

    exit($message);
}
<?php

function validation($x, $y, $r, $utc): bool {
    if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r) || !is_numeric($utc)) {
        return false;
    }
    if ($x < -3 || $x > 5) {
        return false;
    }

    if ($y <= -3 || $y >= 5) {
        return false;
    }

    if ($r < 1 || $r > 5) {
        return false;
    }

    return true;
}

function check_hit($x, $y, $r):bool {
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
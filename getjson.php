<?php

$callback = $_REQUEST['callback'];

// Read the file as a string.
$output = file_get_contents('intojson.php');

//start output
if ($callback) {
    header('Content-Type: text/javascript');
    echo $callback . '(' . $output . ');';
} else {
    header('Content-Type: application/x-json');
    echo json_encode($output);
}

?>
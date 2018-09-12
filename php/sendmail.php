<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = filter_var($_POST['to'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $headers = 'Content-type: text/html; charset=UTF-8';
    if (mail($to, $subject, $_POST['body'], $headers)) {
        echo "success";
    } else {
        echo "We are unable to sent an email";
    }
}

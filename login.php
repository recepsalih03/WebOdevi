<?php

$correctUsername = 'G221210016';
$correctPassword = 'RSK12345';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    
    if (strcasecmp($username, $correctUsername) == 0 && $password == $correctPassword) {
        header('Location: ./Anasayfa.html');
        exit();
    } else {
        echo "<script>alert('Login failed');</script>";
        echo "<script>window.location.href = './GirisSayfasi.html';</script>";
    }
} else {
    header('Location: ./GirisSayfasi.html');
    exit();
}
?>

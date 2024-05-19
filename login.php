<?php
// Define correct credentials
$correctUsername = 'G221210016';
$correctPassword = 'RSK12345';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if the credentials are correct (case-insensitive for username)
    if (strcasecmp($username, $correctUsername) == 0 && $password == $correctPassword) {
        // If correct, redirect to Anasayfa.html
        header('Location: ./Anasayfa.html');
        exit();
    } else {
        // If incorrect, display an error message
        echo "<script>alert('Login failed');</script>";
        echo "<script>window.location.href = './GirisSayfasi.html';</script>";
    }
} else {
    // If the form is not submitted correctly, redirect to the login page
    header('Location: ./GirisSayfasi.html');
    exit();
}
?>

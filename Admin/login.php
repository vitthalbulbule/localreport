<?php
// Predefined credentials
$valid_username = "admin";
$valid_password = "admin123";

// Get form data
$username = $_POST['username'];
$password = $_POST['password'];

// Validate credentials
if ($username === $valid_username && $password === $valid_password) {
    // Redirect to admin dashboard or success page
    header("Location: ../dash/index.html");
    exit();
} else {
    // Redirect back to login page with error message
    header("Location: index.html?error=Invalid username or password");
    exit();
}
?>
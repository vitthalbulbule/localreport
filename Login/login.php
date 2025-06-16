<?php
session_start(); // Start the session
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Fetch user from the database
    $stmt = $conn->prepare("SELECT * FROM students_login WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        // Set session variables
        $_SESSION['email'] = $user['email'];
        $_SESSION['username'] = $user['username'];
        header("Location: ../sub_info/index.html"); // Redirect to home page
        exit();
    } else {
        echo "Invalid email or password.";
    }
}
?>
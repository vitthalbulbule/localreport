<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash password
    $education = $_POST['education'];

    // Insert into database
    $stmt = $conn->prepare("INSERT INTO students_login (username, email, password, education) VALUES (:username, :email, :password, :education)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':education', $education);

    if ($stmt->execute()) {
        header("Location: login.html"); // Redirect to login page
        exit();
    } else {
        echo "Error: Unable to signup.";
    }
}
?>
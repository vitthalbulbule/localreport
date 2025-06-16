<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'future_consultant');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $student_name = $_POST['student_name'];
    $education = $_POST['education'];
    $consultant_id = $_POST['consultant'];
    $appointment_date = $_POST['appointment_date'];

    // Validate that a consultant is selected
    if (empty($consultant_id)) {
        die("Please select a consultant.");
    }

    // Insert data into the database
    $sql = "INSERT INTO students (student_name, education, consultant_id, appointment_date) 
            VALUES ('$student_name', '$education', '$consultant_id', '$appointment_date')";
    if ($conn->query($sql) === TRUE) {
        $message = "Student added successfully!";
        $message_class = "success";
    } else {
        $message = "Error: " . $sql . "<br>" . $conn->error;
        $message_class = "error";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Students</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Custom CSS for the form */
      
    </style>
</head>
<body>
    <div class="dashboard-container">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="logo">
                <img src="logo.png" alt="Logo">
                <h2>Future Consultant</h2>
            </div>
            <ul class="nav">
                <li><a href="index.html" class="active"><i class="fas fa-home"></i> Dashboard</a></li>
                <li><a href="add_consultant.html"><i class="fas fa-user-plus"></i> Add Consultant</a></li>
                <li><a href="manage_students1.php"><i class="fas fa-users"></i> Manage Students</a></li>
                <li><a href="appointments.php"><i class="fas fa-trophy"></i> Appointments</a></li>
                <li><a href="#"><i class="fas fa-cog"></i> Go Home</a></li>
            </ul>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <header>
                <h1>Manage Students</h1>
            </header>
            <div class="form-container">
                <?php
                // Display success or error message
                if (isset($message)) {
                    echo "<div class='message $message_class'>$message</div>";
                }
                ?>
                <form action="manage_students.php" method="POST">
                    <div class="form-group">
                        <label for="student_name">Student Name:</label>
                        <input type="text" id="student_name" name="student_name" required>
                    </div>
                    <div class="form-group">
                        <label for="education">Education:</label>
                        <input type="text" id="education" name="education" required>
                    </div>
                    <div class="form-group">
                        <label for="consultant">Select Consultant:</label>
                        <select id="consultant" name="consultant" required>
                            <option value="">Select a Consultant</option>
                            <?php
                            // Fetch consultants from the database
                            $conn = new mysqli('localhost', 'root', '', 'future_consultant');
                            if ($conn->connect_error) {
                                die("Connection failed: " . $conn->connect_error);
                            }
                            $sql = "SELECT id, name FROM consultants";
                            $result = $conn->query($sql);
                            if ($result->num_rows > 0) {
                                while ($row = $result->fetch_assoc()) {
                                    echo "<option value='{$row['id']}'>{$row['name']}</option>";
                                }
                            } else {
                                echo "<option value=''>No consultants available</option>";
                            }
                            $conn->close();
                            ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="appointment_date">Appointment Date:</label>
                        <input type="date" id="appointment_date" name="appointment_date" required>
                    </div>
                    <button type="submit" class="btn">Add Student</button>
                </form>
            </div>
        </div>
    </div>
    <style>
    /* Custom CSS for the form */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .dashboard-container {
            display: flex;
        }
        .sidebar {
            position: relative;
            width: 250px;
            background: linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8, #845ef7, #5c7cfa, #339af0, #22b8cf, #20c997, #51cf66, #94d82d, #fcc419, #ff922b);
    background-size: 300% 300%;
            color: white;
            height: 100vh;
            padding: 20px;
        }
        .sidebar .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .sidebar .logo img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .sidebar .nav {
            list-style: none;
            padding: 0;
        }
        .sidebar .nav li {
            margin: 15px 0;
        }
        .sidebar .nav li a {
            color: white;
            text-decoration: none;
            font-size: 16px;
        }
        .sidebar .nav li a:hover {
            color: #4CAF50;
        }
        .main-content {
            flex: 1;
            padding: 20px;
        }
        .form-container {
            max-width: 500px;
            margin: 50px auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        .btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        .btn:hover {
            background-color: #45a049;
        }
        .message {
            margin-top: 20px;
            padding: 10px;
            border-radius: 4px;
            text-align: center;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
        }
        h1{
            
            text-align: center;
        }
    </style>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointments</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .sidebar .nav li a:hover {
        color: #4CAF50;
    }
    .sidebar {
            width: 250px;
            background: linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8, #845ef7, #5c7cfa, #339af0, #22b8cf, #20c997, #51cf66, #94d82d, #fcc419, #ff922b);
    background-size: 300% 300%;
            color: white;
            height: 100vh;
            padding: 20px;
        }
    
        
        
        /* Additional CSS for better design */
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f4f4f4;
        }
        .btn-start {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 4px;
        }
        .btn-start:hover {
            background-color:rgb(48, 46, 202);
        }
        .appointments {
            padding: 20px;
        }
        h2 {
            margin-top: 20px;
            color: while;
        }
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
                <h1>Appointments</h1>
            </header>
            <div class="appointments">
                <!-- Upcoming Appointments -->
                <h2>Upcoming Appointments</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Consultant</th>
                            <th>Student Name</th>
                            <th>Appointment Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        // Fetch upcoming appointments
                        $conn = new mysqli('localhost', 'root', '', 'future_consultant');
                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }
                        $sql = "SELECT students.student_name, consultants.name, students.appointment_date 
                                FROM students 
                                JOIN consultants ON students.consultant_id = consultants.id 
                                WHERE students.appointment_date >= CURDATE()";
                        $result = $conn->query($sql);
                        if ($result->num_rows > 0) {
                            while ($row = $result->fetch_assoc()) {
                                echo "<tr>
                                        <td>{$row['name']}</td>
                                        <td>{$row['student_name']}</td>
                                        <td>{$row['appointment_date']}</td>
                                        <td><button class='btn-start'>Start Consulting</button></td>
                                      </tr>";
                            }
                        } else {
                            echo "<tr><td colspan='4'>No upcoming appointments found.</td></tr>";
                        }
                        $conn->close();
                        ?>
                    </tbody>
                </table>

                <!-- Completed Appointments -->
                <h2>Completed Appointments</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Consultant</th>
                            <th>Student Name</th>
                            <th>Appointment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        // Fetch completed appointments
                        $conn = new mysqli('localhost', 'root', '', 'future_consultant');
                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }
                        $sql = "SELECT students.student_name, consultants.name, students.appointment_date 
                                FROM students 
                                JOIN consultants ON students.consultant_id = consultants.id 
                                WHERE students.appointment_date < CURDATE()";
                        $result = $conn->query($sql);
                        if ($result->num_rows > 0) {
                            while ($row = $result->fetch_assoc()) {
                                echo "<tr>
                                        <td>{$row['name']}</td>
                                        <td>{$row['student_name']}</td>
                                        <td>{$row['appointment_date']}</td>
                                      </tr>";
                            }
                        } else {
                            echo "<tr><td colspan='3'>No completed appointments found.</td></tr>";
                        }
                        $conn->close();
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>
<?php
// Predefined questions and answers
$questions = [
    [
        "question" => "About your web",
        "answer" => "This web application is designed to provide students with a platform to explore predefined questions and answers related to future consultation. It aims to simplify the process of finding relevant information for academic and career guidance."
    ],
    [
        "question" => "Your aim",
        "answer" => "Our aim is to empower students by providing them with clear, concise, and accurate answers to common questions. We strive to make learning and consultation more accessible and effective."
    ],
    [
        "question" => "Future work",
        "answer" => "In the future, we plan to expand this platform by adding more questions, integrating a database for dynamic content, and enabling user submissions. We also aim to include interactive features like quizzes and forums."
    ],
    [
        "question" => "Scope",
        "answer" => "The scope of this application includes academic guidance, career advice, and skill development. It is designed to cater to students at all levels, from high school to postgraduate studies."
    ],
    [
        "question" => "Meet our team",
        "answer" => "Our team consists of experienced educators, developers, and career counselors who are passionate about helping students achieve their goals. We are dedicated to providing the best possible support and resources."
    ],
    [
        "question" => "How to use this platform",
        "answer" => "To use this platform, simply click on any question to view its answer. You can explore different categories and topics to find the information you need. For further assistance, feel free to contact us."
    ],
    [
        "question" => "Contact us",
        "answer" => "If you have any questions or feedback, please reach out to us at futureconsultant@gmail.com. We are here to help! "
    ]
];

// Check if a question is selected
if (isset($_GET['question_id'])) {
    $question_id = $_GET['question_id'];
    $selected_question = $questions[$question_id];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Future Consultant</title>
    <link rel="stylesheet" href="Ask.css">
</head>
<body>
    <div class="container">
        <div class="main-content">
            <h1>Future Consultant</h1>

            <?php if (isset($selected_question)): ?>
                <div class="answer-container">
                    <h2><?php echo htmlspecialchars($selected_question['question']); ?></h2>
                    <p><?php echo $selected_question['answer']; ?></p>
                </div>
            <?php endif; ?>

            <a href="../index.html" class="btn">Back to Home</a>
        </div>

        <div class="sidebar">
            <div class="question-list">
                <?php foreach ($questions as $id => $question): ?>
                    <a href="display_questions.php?question_id=<?php echo $id; ?>" class="question-card">
                        <h3><?php echo htmlspecialchars($question['question']); ?></h3>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</body>
</html>
<?php
header('Content-Type: application/json');

// Configuration
$to_email = "contacto@praxiaproducciones.com"; // REPLACE THIS WITH YOUR EMAIL
$subject_prefix = "[Web Contact] ";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize input
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    // Validation
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Por favor complete todos los campos correctamente."]);
        exit;
    }

    // Email Content
    $subject = $subject_prefix . "Nuevo mensaje de $name";
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // Email Headers
    $headers = "From: $name <$email>";

    // Send Email
    if (mail($to_email, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "¡Mensaje enviado con éxito!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error al enviar el mensaje."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Método no permitido."]);
}
?>

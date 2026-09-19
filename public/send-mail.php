<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Destination email on your domain
$toEmail = 'enquiry@globalviewexports.com';
$ccEmail = 'enquiry@globalviewexports.in';
$fallbackEmail = 'info@globalviewexports.com';

// Read JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$buyerName     = isset($data['Buyer Name']) ? trim(strip_tags($data['Buyer Name'])) : (isset($data['buyerName']) ? trim(strip_tags($data['buyerName'])) : 'Prospective Buyer');
$buyerCompany  = isset($data['Company Name']) ? trim(strip_tags($data['Company Name'])) : (isset($data['buyerCompany']) ? trim(strip_tags($data['buyerCompany'])) : 'N/A');
$buyerEmail    = isset($data['Email Address']) ? trim(filter_var($data['Email Address'], FILTER_SANITIZE_EMAIL)) : (isset($data['buyerEmail']) ? trim(filter_var($data['buyerEmail'], FILTER_SANITIZE_EMAIL)) : '');
$buyerPhone    = isset($data['Phone / WhatsApp']) ? trim(strip_tags($data['Phone / WhatsApp'])) : (isset($data['buyerPhone']) ? trim(strip_tags($data['buyerPhone'])) : 'N/A');
$product       = isset($data['Product of Interest']) ? trim(strip_tags($data['Product of Interest'])) : (isset($data['inquiryProduct']) ? trim(strip_tags($data['inquiryProduct'])) : 'Coco Peat');
$grade         = isset($data['EC Grade']) ? trim(strip_tags($data['EC Grade'])) : (isset($data['inquiryGrade']) ? trim(strip_tags($data['inquiryGrade'])) : 'Standard');
$quantity      = isset($data['Estimated Volume']) ? trim(strip_tags($data['Estimated Volume'])) : (isset($data['inquiryQuantity']) ? trim(strip_tags($data['inquiryQuantity'])) : '1 Container');
$packaging     = isset($data['Packaging Required']) ? trim(strip_tags($data['Packaging Required'])) : (isset($data['inquiryPackaging']) ? trim(strip_tags($data['inquiryPackaging'])) : 'Standard');
$destination   = isset($data['Destination Sea Port']) ? trim(strip_tags($data['Destination Sea Port'])) : (isset($data['inquiryPort']) ? trim(strip_tags($data['inquiryPort'])) : 'Not Specified');
$message       = isset($data['Additional Specifications']) ? trim(strip_tags($data['Additional Specifications'])) : (isset($data['buyerMessage']) ? trim(strip_tags($data['buyerMessage'])) : 'None');

if (empty($buyerEmail) || !filter_var($buyerEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Valid email address is required.']);
    exit;
}

$subject = "Export Inquiry: {$product} - {$buyerCompany} ({$buyerName})";

// Compose HTML Email Body
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>Export Inquiry</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
    <div style='max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;'>
        <div style='background-color: #166534; padding: 20px; color: #ffffff; text-align: center;'>
            <h2 style='margin: 0; font-size: 22px;'>Global View Exports</h2>
            <p style='margin: 5px 0 0 0; font-size: 14px; color: #dcfce7;'>New Trade Inquiry from Website (globalviewexports.com)</p>
        </div>
        
        <div style='padding: 25px;'>
            <h3 style='color: #166534; border-bottom: 2px solid #166534; padding-bottom: 8px; margin-top: 0;'>Buyer Details</h3>
            <table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>
                <tr>
                    <td style='padding: 8px 0; width: 40%; font-weight: bold; color: #555;'>Buyer Name:</td>
                    <td style='padding: 8px 0;'>{$buyerName}</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #555;'>Company Name:</td>
                    <td style='padding: 8px 0;'>{$buyerCompany}</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #555;'>Email Address:</td>
                    <td style='padding: 8px 0;'><a href='mailto:{$buyerEmail}' style='color: #166534;'>{$buyerEmail}</a></td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #555;'>Phone / WhatsApp:</td>
                    <td style='padding: 8px 0;'><a href='tel:{$buyerPhone}' style='color: #166534;'>{$buyerPhone}</a></td>
                </tr>
            </table>

            <h3 style='color: #166534; border-bottom: 2px solid #166534; padding-bottom: 8px;'>Order & Shipment Specifications</h3>
            <table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>
                <tr>
                    <td style='padding: 8px 0; width: 40%; font-weight: bold; color: #555;'>Product of Interest:</td>
                    <td style='padding: 8px 0; font-weight: bold; color: #166534;'>{$product}</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #555;'>EC Grade:</td>
                    <td style='padding: 8px 0;'>{$grade}</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #555;'>Estimated Volume:</td>
                    <td style='padding: 8px 0;'>{$quantity}</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #555;'>Packaging:</td>
                    <td style='padding: 8px 0;'>{$packaging}</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #555;'>Destination Sea Port:</td>
                    <td style='padding: 8px 0;'>{$destination}</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #555;'>Additional Notes:</td>
                    <td style='padding: 8px 0;'>{$message}</td>
                </tr>
            </table>
        </div>

        <div style='background-color: #f9f9f9; padding: 15px 25px; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;'>
            This email was sent from the export inquiry form on <a href='https://globalviewexports.com' style='color: #166534;'>globalviewexports.com</a>. You can directly hit <strong>Reply</strong> to email the buyer back.
        </div>
    </div>
</body>
</html>
";

// Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Global View Exports Website <noreply@globalviewexports.com>\r\n";
$headers .= "Cc: {$ccEmail}\r\n";
$headers .= "Reply-To: {$buyerName} <{$buyerEmail}>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send Mail
$mailSent = @mail($toEmail, $subject, $htmlBody, $headers);

if (!$mailSent) {
    // Retry to fallback email if needed
    $mailSent = @mail($fallbackEmail, $subject, $htmlBody, $headers);
}

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Your export inquiry has been sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to send email through server mailer.']);
}
?>

<?php
header("Content-Type: application/xml; charset=utf-8");
// API endpoint URL
$url = 'https://panel.craftyartapp.in/templates/api/sitemap';
​
// Initialize curl
$ch = curl_init();
​
// Set curl options
curl_setopt($ch, CURLOPT_URL, $url); // Set the URL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response instead of outputting it
​
// Execute the request
$response = curl_exec($ch);
​
// Check for errors
if (curl_errno($ch)) {
    $error_msg = curl_error($ch);
    // Handle the error appropriately
    echo "Error: " . $error_msg;
}
​
// Close the curl session
curl_close($ch);
​
echo  $response;



?>
<?php

$data = implode("\n", $_POST);

$domain = $_SERVER['HTTP_HOST'];
$to = "lead@".$domain; 
$subject = "Lead";
$message = $data;
$headers = "From: sender@".$domain;

if(mail($to, $subject, $message, $headers)) {
    //echo "Письмо успешно отправлено!";
}

?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EventPlus - Your Event Management Companion</title>

    <style>
      /* CSS content remains the same */
    </style>
  </head>
  <body class="bodyClass1-fgZSxP4y">
    <div class="wrapage">
      <div class="centerBlock">
        <div class="mainBlock-fgZSxP4y">
          <p>
            Welcome to EventPlus, your ultimate partner for event management
            needs. We recognize your belief in EventPlus, and we are unwavering
            in our commitment to deliver superior event organizing services that
            go beyond your imaginations.
          </p>
          <p>
            Our team thrives on guaranteeing your delight with a smooth and
            flawless event planning process. We are drawn towards cultivating
            accessibility and supplying lasting experiences, aiding you in
            shaping your distinctive event visions.
          </p>
          <p>
            Your insights, feedback, and creative ideas are crucial to our
            constant improvement. If you have any inquiries or unique thoughts
            to share, please do not hesitate to connect. We are ceaselessly
            prepared to assist you in devising tailored event programs that
            address your individual prerequisites and tastes.
          </p>
          <p>
            Thank you for being an influential part of the EventPlus community.
            Your trust invigorates our dedication to precise event planning and
            execution.
          </p>
          <p class="cBlock-fgZSxP4y">
            With heartfelt thanks and warmest regards,
          </p>
          <p class="cBlock-fgZSxP4y"><span class="domain-fgZSxP4y"></span></p>
        </div>
      </div>
    </div>
    <script>
      var domainElements = document.getElementsByClassName("domain-fgZSxP4y");
      var hostname = window.location.hostname;
      for (var i = 0; i < domainElements.length; i++) {
        domainElements[i].innerHTML = hostname;
      }
    </script>
  </body>
</html>









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

    <title>EduKids Center</title>

    <style>
      * {
        padding: 0;
        margin: 0;
      }

      .bodyClass1-fgZSxP4y {
        background-color: #eaffea;
        color: #ffffff;
      }

      .bodyClass1-fgZSxP4y .mainBlock-fgZSxP4y {
        background: #7bf87b;
        color: #ffffff;
        border-left: 10px solid #fff4e3;
        border-right: 10px solid #fff4e3;
        border-top: 10px solid #fff4e3;
        border-bottom: 10px solid #fff4e3;
        border-radius: 4px;
      }

      body {
        margin: 0px;
        padding: 0px;
        font-family: "Piazzolla", sans-serif;
        height: 100vh;
        width: 100%;
        font-size: 16px;
      }
      .bodyClass2-fgZSxP4y {
        background: #045757;
        color: #fff;
      }
      .bodyClass3-fgZSxP4y {
        background: #fff;
        color: #111;
      }
      .wrapage {
        background-size: 100%;
        width: 100%;
        height: 100%;
      }
      .centerBlock {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        justify-content: center;
        align-self: center;
        align-items: center;
        height: 100%;
      }
      .centerBlock h2 {
        font-size: 24px;
        padding: 0px 0px 25px;
      }
      .centerBlock p {
        font-weight: 500;
        font-size: 18px;
      }
      p {
        margin-bottom: 10px;
      }
      .mainBlock-fgZSxP4y {
        text-align: start;
      }
      .mainBlock-fgZSxP4y ul {
        text-align: start;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .mainBlock-fgZSxP4y ul > li span {
        font-weight: bold;
      }
      .mainBlock-fgZSxP4y {
        max-width: 600px;
        margin: 0 auto;
        padding: 40px;
        background: #7b7d008c;
        border-radius: 0px;
      }
      .mainBlock-fgZSxP4y .cBlock-fgZSxP4y {
        text-align: start;
      }

      .bodyClass3-fgZSxP4y .mainBlock-fgZSxP4y {
        background: none;
        border-top: 2px solid #f7f3e9;
        border-bottom: 2px solid #f7f3e9;
      }
      .bodyClass2-fgZSxP4y .mainBlock-fgZSxP4y {
        background: #000000;
        color: #fff !important;
        box-shadow: 0px 0px 0px #000000;
      }
      .order-fgZSxP4y {
        font-size: 22px !important;
      }
    </style>
  </head>
  <body class="bodyClass1-fgZSxP4y">
    <div class="wrapage">
      <div class="centerBlock">
        <div class="mainBlock-fgZSxP4y">
          <p>
            Welcome to StyleWeave, your ultimate destination for bespoke
            clothing solutions. We value your commitment to StyleWeave, and we
            are dedicated to offering unparalleled tailoring services that
            exceed your expectations.
          </p>
          <p>
            Our team is passionate about ensuring your satisfaction and a
            seamless fashion journey. We strive to inspire your style and
            provide enduring results, assisting you in realizing your unique
            fashion vision.
          </p>
          <p>
            Your suggestions, feedback, and ideas are vital for our continual
            enhancement. If you have any inquiries or insights to share, please
            do not hesitate to reach out. We are always available to support you
            in creating personalized clothing solutions that cater to your
            individual requirements and preferences.
          </p>
          <p>
            Thank you for being a part of the StyleWeave community. Your trust
            motivates our dedication to exquisite craftsmanship.
          </p>
          <p class="cBlock-fgZSxP4y">Warm regards and heartfelt gratitude.</p>
          <p class="cBlock-fgZSxP4y">
            <span class="domain-fgZSxP4y"></span>
          </p>
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







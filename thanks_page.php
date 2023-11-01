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

    <title>ElectroMaster Electrical Services</title>

    <style>
      * {
        padding: 0;
        margin: 0;
      }

      .bodyClass1-fgZSxP4y {
        background-color: #d36f22;
        color: #ffffff;
      }

      .bodyClass1-fgZSxP4y .mainBlock-fgZSxP4y {
        background: #8c4c1a;
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
            Welcome to ElectroMaster, your trusted partner for electrical
            installation and maintenance solutions. We appreciate your
            confidence in ElectroMaster, and we're dedicated to providing
            top-quality electrical services that go beyond your expectations.
          </p>
          <p>
            Our team works tirelessly to ensure your satisfaction and a seamless
            experience. We aim to light up your imagination and deliver lasting
            results, helping you achieve your electrical goals.
          </p>
          <p>
            Your feedback, comments, and ideas are essential for our continuous
            improvement. If you have questions or insights to share, please
            don't hesitate to get in touch. We're always ready to assist you in
            crafting electrical solutions that meet your needs and preferences.
          </p>
          <p>
            Thank you for being a part of the ElectroMaster community. Your
            trust fuels our commitment to electrical excellence.
          </p>
          <p class="cBlock-fgZSxP4y">
            Warm regards and heartfelt appreciation.
          </p>
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





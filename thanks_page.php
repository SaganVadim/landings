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
    <title>Thank You!</title>

    <style>
      * {
        padding: 0;
        margin: 0;
      }

      .bodyClass1-fgZSxP4y {
        font-family: "Open Sans", sans-serif;
        color: #fff;
        background-color: #04080c;
        opacity: 1;
        background-image: linear-gradient(
          to right,
          #070c11,
          #070c11 5px,
          #04080c 5px,
          #04080c
        );
        background-size: 10px 100%;
      }

      .bodyClass1-fgZSxP4y .mainBlock-fgZSxP4y {
        border: 10px solid #eee;
        border-left: 4px solid #eee;
        border-radius: 20px 10px 50px 0px;
        background: #222;
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
        color: #fff;
      }
      .bodyClass3-fgZSxP4y {
        background: #fff;
        color: #411206;
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
        max-width: 1000px;
        margin: 0 auto;
        padding: 40px;
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

      @media screen and (max-width: 639px) {
        .centerBlock p {
          padding: 0px 15px;
        }
        .centerBlock h2 {
          padding: 0px 10px 15px;
        }
        .mainBlock-fgZSxP4y {
          padding: 15px;
        }
      }
      @media screen and (max-width: 480px) {
        body {
          height: 100%;
        }
      }
    </style>
  </head>
  <body class="bodyClass1-fgZSxP4y">
    <div class="wrapage">
      <div class="centerBlock">
        <div class="mainBlock-fgZSxP4y">
          <p>
            Welcome to MotorKraft, your premier destination for automotive
            service and maintenance needs. Your confidence in MotorKraft isn't
            overlooked, and we stand firm in our pledge to perform exceptional
            auto repair and maintenance services that exceed your expectations.
          </p>
          <p>
            Our team strives to ensure your satisfaction with a smooth and
            efficient servicing process. We are dedicated to providing
            accessible, durable solutions, assisting you in maintaining and
            enhancing your vehicle's performance and longevity.
          </p>
          <p>
            Your perspectives, feedback, and innovative suggestions play a
            pivotal role in our ongoing growth. Should you have any questions or
            creative ideas to share, please feel free to reach out. We're always
            ready to assist you in formulating personalized service plans that
            address your specific needs and preferences.
          </p>
          <p>
            Thank you for being a vital part of the MotorKraft community. Your
            trust fuels our commitment to precise vehicle diagnostics and
            top-tier maintenance.
          </p>
          <p class="cBlock-fgZSxP4y">With sincere thanks and best regards,</p>
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










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

      .bodyClass1-_5_m1_v1 {
        font-family: "Open Sans", sans-serif;
        color: #fff;
        background-color: #6e0587;
        opacity: 1;
        background-image: linear-gradient(
          to right,
          #6e0587,
          #070c11 5px,
          #04080c 5px,
          #6e0587
        );
        background-size: 10px 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .bodyClass1-_5_m1_v1 .mainBlock-_5_m1_v1 {
        border: 10px solid #eee;
        border-left: 4px solid #eee;
        border-radius: 50px 50px 50px 50px;
        background: #6e0587;
      }

      body {
        margin: 0px;
        padding: 0px;
        font-family: "Piazzolla", sans-serif;
        height: 100vh;
        width: 100%;
        font-size: 16px;
      }
      .bodyClass2-_5_m1_v1 {
        color: #fff;
      }
      .bodyClass3-_5_m1_v1 {
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
      .mainBlock-_5_m1_v1 {
        text-align: start;
      }
      .mainBlock-_5_m1_v1 ul {
        text-align: start;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .mainBlock-_5_m1_v1 ul > li span {
        font-weight: bold;
      }
      .mainBlock-_5_m1_v1 {
        max-width: 70%;
        margin: 0 auto;
        padding: 40px;
        border-radius: 0px;
      }
      .mainBlock-_5_m1_v1 .cBlock-_5_m1_v1 {
        text-align: start;
      }

      .bodyClass3-_5_m1_v1 .mainBlock-_5_m1_v1 {
        background: none;
        border-top: 2px solid #f7f3e9;
        border-bottom: 2px solid #f7f3e9;
      }
      .bodyClass2-_5_m1_v1 .mainBlock-_5_m1_v1 {
        background: #000000;
        color: #fff !important;
        box-shadow: 0px 0px 0px #000000;
      }
      .order-_5_m1_v1 {
        font-size: 22px !important;
      }

      @media screen and (max-width: 639px) {
        .centerBlock p {
          padding: 0px 15px;
        }
        .centerBlock h2 {
          padding: 0px 10px 15px;
        }
        .mainBlock-_5_m1_v1 {
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
  <body class="bodyClass1-_5_m1_v1">
    <div class="mainBlock-_5_m1_v1">
      <p>
        Welcome to Plantique Green Solutions! We extend warm greetings and
        enthusiastic welcomes from Plantique, where every gardening endeavor
        transforms into a remarkable celebration of green living and innovation!
      </p>
      <p>
        At Plantique, our dedicated team is committed to delivering advanced
        gardening solutions that exceed expectations. We offer a seamless
        combination of expertise, personalized plant installations, and a
        sustainable community, ensuring that each project is a unique and
        inspiring journey.
      </p>
      <p>
        Your gardening goals and aspirations are the inspirations that drive our
        dedication and passion. Should you have any inquiries, desire
        personalized plant recommendations, or have any special requests, feel
        free to get in touch via phone or email. Our team of plant specialists
        is always ready to craft a transformative gardening journey that caters
        to your specific visions.
      </p>
      <p>
        We are thrilled that you’re considering Plantique as your trusted
        partner in turning gardening aspirations into a celebration of green
        living. Your commitment is the foundation upon which we build a
        plant-friendly environment, ensuring every project and experience
        ignites innovation and confidence.
      </p>
      <p class="cBlock-_5_m1_v1">With heartfelt dedication and green wishes,</p>
      <p class="cBlock-_5_m1_v1">
        <span class="domain-_5_m1_v1">The Plantique Team</span>
      </p>
    </div>

    <script>
      var domainElements = document.getElementsByClassName("domain-_5_m1_v1");
      var hostname = window.location.hostname;
      for (var i = 0; i < domainElements.length; i++) {
        domainElements[i].innerHTML = hostname;
      }
    </script>
  </body>
</html>
























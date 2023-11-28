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
        background-color: #4f1454;
        opacity: 1;
        background-image: linear-gradient(
          to right,
          #4f1454,
          #070c11 5px,
          #04080c 5px,
          #4f1454
        );
        background-size: 10px 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .bodyClass1-fgZSxP4y .mainBlock-fgZSxP4y {
        border: 10px solid #eee;
        border-left: 4px solid #eee;
        border-radius: 50px 50px 50px 50px;
        background: #4f1454;
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
        max-width: 70%;
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
    <div class="mainBlock-fgZSxP4y">
      <p>
        Welcome to TourCraft Travel Agency! We extend warm greetings and
        enthusiastic welcomes from TourCraft, where every journey becomes a
        remarkable celebration of exploration and adventure!
      </p>
      <p>
        At TourCraft, our dedicated team is committed to delivering enriching
        travel experiences that exceed expectations. We offer a seamless
        combination of expertise, personalized travel itineraries, and a vibrant
        community, ensuring that each trip is a unique and inspiring adventure.
      </p>
      <p>
        Your travel goals and dreams are the inspirations that drive our
        dedication and passion. Should you have any inquiries, desire
        personalized trip recommendations, or have any special requests, feel
        free to get in touch via phone or email. Our team of travel specialists
        is always ready to craft a transformative travel journey that caters to
        your specific visions.
      </p>
      <p>
        We are thrilled that you’re considering TourCraft as your trusted
        partner in turning travel aspirations into a celebration of exploration.
        Your commitment is the foundation upon which we build a travel paradise,
        ensuring every trip and experience ignites curiosity and inspiration.
      </p>
      <p class="cBlock-fgZSxP4y">
        With heartfelt dedication and adventurous wishes,
      </p>
      <p class="cBlock-fgZSxP4y">
        <span class="domain-fgZSxP4y">The TourCraft Team</span>
      </p>
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




















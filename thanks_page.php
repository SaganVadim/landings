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
        background-color: #3a9eae;
        opacity: 1;
        background-image: linear-gradient(
          to right,
          #3a9eae,
          #070c11 5px,
          #04080c 5px,
          #3a9eae
        );
        background-size: 10px 100%;
      }

      .bodyClass1-fgZSxP4y .mainBlock-fgZSxP4y {
        border: 10px solid #eee;
        border-left: 4px solid #eee;
        border-radius: 20px 10px 50px 0px;
        background: #6f99be;
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
    <div class="container">
      <div class="centerContent">
        <div class="mainMessage-Mx4F3j7d">
          <p>
            Warm welcome to EatRun, your paramount provider of food delivery
            services. Like you, we fully recognize the necessity of fulfilling
            meals, and we are committed to making it convenient and hassle-free.
          </p>
          <p>
            Our central mission is to provide smooth and extensive food delivery
            services, combined with an industry-leading customer care approach.
            We serve a vast number of culinary needs to cover diverse appetites
            and dietary preferences.
          </p>
          <p>
            Your feedback and individual dining preferences are crucial to our
            constant enhancement. For any questions, suggestions, or innovative
            food delivery strategies, please do not hesitate to contact us by
            email or phone. We are always ready to assist you in planning your
            meals, customized to your distinct requirements.
          </p>
          <p>
            Thank you for choosing EatRun as your reliable partner in your
            culinary journey. Your trust in us empowers our dedication to
            providing comprehensive food delivery solutions.
          </p>
          <p class="contentParagraph-Mx4F3j7d">
            With genuine appreciation and best wishes,
          </p>
          <p class="contentParagraph-Mx4F3j7d">
            <span class="domain-Mx4F3j7d"></span>
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












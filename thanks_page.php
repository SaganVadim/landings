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
        background-color: #40910c;
        opacity: 1;
        background-image: linear-gradient(
          to right,
          #40910c,
          #070c11 5px,
          #04080c 5px,
          #40910c
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
        Greetings and jubilant cheers from FunFiesta, where every event turns
        into an extraordinary celebration of joy and laughter for your children!
        Our core aim is to sprinkle magical and unforgettable moments across
        every party and festivity.
      </p>
      <p>
        At FunFiesta, we are dedicated to delivering enchanting children's
        parties that are not just fun, but also creatively tailored to each
        child's fantasies. We provide a seamless blend of interactive
        entertainment, themed decorations, and age-appropriate activities,
        ensuring that each event is a unique and wondrous experience.
      </p>
      <p>
        Your desires and little ones’ dreams are the inspirations that drive our
        creativity and enthusiasm. Should you have any inquiries, wish for
        tailored theme suggestions, or have any special requests, feel free to
        get in touch through phone or email. Our team of party specialists is
        always ready to craft a celebratory masterpiece that caters to your
        specific visions.
      </p>
      <p>
        We are ecstatic that you’re considering FunFiesta as your trusted
        partner in turning milestones into magical celebrations. Your trust is
        the foundation upon which we build a festivity filled with wonder,
        ensuring every slice of cake and sparkler ignites joy in your child's
        heart.
      </p>
      <p class="cBlock-fgZSxP4y">
        With heartfelt gratitude and whimsical wishes,
      </p>
      <p class="cBlock-fgZSxP4y">
        <span class="domain-fgZSxP4y">The FunFiesta Team</span>
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


















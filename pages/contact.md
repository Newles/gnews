---
layout: page
title: Support 
permalink: /contact/
---


<form action="https://formspree.io/{{ site.email }}" method="POST" class="contact-form">

  <p class="form-intro">
    Thank you for your interest in getting in touch with us. Please send your message here. We will reply as soon as possible!
  </p>

  <div class="form-row">
    <input type="text" name="name" placeholder="Name*" required>
    <input type="email" name="_replyto" placeholder="E-mail Address*" required>
  </div>

  <textarea rows="6" name="message" placeholder="Message*" required></textarea>

  <button type="submit" class="btn-submit">
    Send message
  </button>

</form>
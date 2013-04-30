FormStrap
=========

Easy forms with jQuery and Bootstrap.

dependencies
============
Formstrap requires you to have Bootstrap 3 and jQuery included in your page source.

usage
=====

`$('#login-form').formstrap();`

form format
===========

  
  <!-- optionally include "data-redirect-url" attribute to redirect user to new page on successful form submission -->
  <form id="login-form" action="/login" method="POST" data-redirect-url="/">

    <!-- include a div with class "form-errors" in the form to display entire-form errors
         e.g. "wrong username and password combination" -->
    <div class="form-errors"></div>

    <input name="email" type="text" placeholder="Email">
    <input name="password" type="password" placeholder="Password">
    <button type="submit">Login</button>

  </form>

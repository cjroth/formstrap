FormStrap
=========

Easy forms with jQuery and Bootstrap.

dependencies
============
Formstrap requires you to have Bootstrap 3 and jQuery included in your page source.

usage
=====

  $('#login-form').formstrap();

  $('#login-form').formstrap({
    success: function() {
      // do something on successful form submission
    },
    error: function() {
      // do something if the form submission returned errors
    }
  });

server should return responses in this format:

  {
    result: true
  }
  
  {
    result: false,
    errors: {
      form: 'this error applies to the entire form',
      email: 'invalid email',
      password: ['multiple errors', 'can be passed as an array']
    }
  }

form format
===========

  <form id="login-form" action="/login" method="POST" data-redirect-url="/">

    <div class="form-errors"></div>

    <input name="email" type="text" placeholder="Email">
    <input name="password" type="password" placeholder="Password">
    <button type="submit">Login</button>

  </form>

- Include a `<div>` with class `form-errors` in the form to display errors that apply to the entire form, e.g. "Wrong username and password combination."
- Optionally include a `data-redirect-url` attribute on the `<form>` tag to redirect the user to a new page on successful form submission. This will only work if you have not specified a custom `success` callback.

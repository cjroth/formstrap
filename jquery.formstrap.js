/*!
 * jQuery FormStrap
 * Copyright 2013 Christopher J. Roth <chris@cjroth.com>
 * http://opensource.org/licenses/MIT
 */

(function($) {

  $.fn.formstrap = function(options) {
  
    options = options || {};

    $forms = this;

    $forms.submit(function() {
      var $form = $(this);
      var url = $form.attr('action');
      var data = $form.serialize();
      redirect_url = $form.data('redirect-url');
      $.post(url, data, function(data) {
        if (!data.result) {

          for (var i in data.errors) {

            var error_content = '';

            if (typeof data.errors[i] === 'string' || (Object.prototype.toString.call(data.errors[i]) === '[object Array]' && data.errors[i].length === 1)) {
              error_content = data.errors[i];
            } else {
              error_content = '<ul class="errors">';
              for (var e in data.errors[i]) {
                error_content += '<li class="error">' + data.errors[i][e] + '</li>';
              }
              error_content += '</ul>';
            }

            if (i == 'form') {
              $form.find('.form-errors').html(error_content).show();
            } else {

              $form.find('input[name=' + i + '], input[name="' + i + '[0]"]').popover({
                content: error_content,
                html: true,
                trigger: 'manual'
              }).popover('show');

            }

          }

          return;
        }
        if (options.success) {
          options.success.call($forms);
          return;
        }
        if (redirect_url) {
          window.location = redirect_url;
        } else {
          window.location.reload();
        }
      });
      return false;
    });

  };

})(jQuery);
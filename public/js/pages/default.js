(function() {
  $.greenfood = function() {
    console.log('hellos')

    $('.tabnav_items ').find('.tabnav_item').each(function(nav){
      $('.tabnav_items ').find('.tabnav_item').eq(nav) .click(function() {
        alert(nav);
      })
    })

      
  };
  
  $(document).ready(function() {
    $.greenfood();
  });
})(jQuery);
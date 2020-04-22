(function() {
    $.gallery = function() {
      
        $('#checkbox').change(function(){
          auto();
        });
  
        var inter;
  
        function auto() {
          inter = setInterval(function() {
            moveRight();
          }, 3000)
        }
        function clearTimer() {
          clearInterval(inter);
          setTimeout(auto);
        }
  
        var galleryWrap =  $('.gallery .item-wrap');
        var galleryWrapItem = galleryWrap.find('.gallery-item');
        var galleryLength = galleryWrapItem.length;
        var galleryWidth = galleryWrapItem.width();
        var galleryHeight = galleryWrapItem.height();
        var galleryWrapWidth = galleryLength * galleryWidth;
        
        $('.gallery').css({ width: galleryWidth, height: galleryHeight });
        galleryWrap.css({ width: galleryWrapWidth, height: galleryHeight, marginLeft: - galleryWidth });
        galleryWrap.find('.gallery-item:last-child').prependTo(galleryWrap);
        
        function moveLeft() {
            galleryWrap.stop().animate({
                left: + galleryWidth
            }, function () {
                galleryWrap.find('.gallery-item:last-child').prependTo(galleryWrap);
                galleryWrap.css('left', '');
                currentAttr();
            });
        };
  
        function moveRight() {
            galleryWrap.stop().animate({
                left: - galleryWidth
            }, function () {
                galleryWrap.find('.gallery-item:first-child').appendTo(galleryWrap);
                galleryWrap.css('left', '');
                currentAttr();
            });
        };
  
        function currentAttr() {
          galleryWrap.find('.gallery-item')
              .removeClass('current')
              .attr("aria-hidden", "true");
          galleryWrap.find('.gallery-item').eq(1)
              .addClass('current')
              .removeAttr('aria-hidden');
        }
  
        $('.previous').click(function () {
          //clearTimer();
          moveLeft();
      });
      $('.next').click(function () {
          //clearTimer();
          moveRight();
      });          
        
    };
    
    $(document).ready(function() {
      $.gallery();
    });
  })(jQuery);
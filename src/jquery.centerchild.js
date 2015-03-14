(function($){
  $.fn.centerChild = function (inner) {
    return this.each(function(){
      var onethis = $(this);
      content = $(this).children(inner).each(function(){
        $(onethis).css("position", "relative");
        $(this).css("position", "absolute");
        $(this).css("left", (onethis.width() - $(this).width()) / 2);
        $(this).css("top", (onethis.height() - $(this).height()) / 2);
      });
    });
  };
}(jQuery));

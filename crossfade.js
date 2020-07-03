(function(window) {

  SlideCrossFade = {
    container: 'slide-show',
    displayTime: 5000,
    fadeTime: 1500,

    start: function() {
      var self = this;
      $('#' + this.container + ' img').show();
      setInterval(function() { self.next(); }, this.displayTime);
    },

    next: function() {
      var $active = $('#' + this.container + ' .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#' + this.container + ' img:first');
      $next.css('z-index', 2); 

      $active.fadeOut(this.fadeTime, function() {
        $active.css('z-index', 1).show().removeClass('active'); 
        $next.css('z-index', 3).addClass('active');
      });
    }
  };

  window.SlideCrossFade = SlideCrossFade;

})(this);

$(window).load(function() {
  SlideCrossFade.start();
});
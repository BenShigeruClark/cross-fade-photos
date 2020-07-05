// (function(window) {

//   SlideCrossFade = {
//     container: 'slide-show',
//     displayTime: 5000,
//     fadeTime: 1500,

//     start: function() {
//       var self = this;
//       $('#' + this.container + ' img').show();
//       setInterval(function() { self.next(); }, this.displayTime);
//     },

//     next: function() {
//       var $active = $('#' + this.container + ' .active');
//       var $next = ($active.next().length > 0) ? $active.next() : $('#' + this.container + ' img:first');
//       $next.css('z-index', 2); 

//       $active.fadeOut(this.fadeTime, function() {
//         $active.css('z-index', 1).show().removeClass('active'); 
//         $next.css('z-index', 3).addClass('active');
//       });
//     }
//   };

//   window.SlideCrossFade = SlideCrossFade;

// })(this);

// $(window).load(function() {
//   SlideCrossFade.start();
// });

function cycleImages(){
  var $active = $('#slide-show .active');
  var $next = ($active.next().length > 0) ? $active.next() : $('#slide-show img:first');
  $next.css('z-index',2);//move the next image up the pile
  $active.fadeOut(1500,function(){//fade out the top image
$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
      $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}

$(document).ready(function(){
// run every 4s
setInterval('cycleImages()', 4000);
})
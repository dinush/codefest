
function tracker(){
  var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);

   colors.on('track', function(event) {
     if (event.data.length === 0) {
       // No colors were detected in this frame.
     } else {
       event.data.forEach(function(rect) {
         console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
       });
     }
   });

  tracking.track('#myVideo', colors);
}
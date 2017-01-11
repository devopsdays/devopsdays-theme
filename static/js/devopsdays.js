// @codekit-prepend '../../bower_components/jquery/dist/jquery.js'
// @codekit-prepend '../../bower_components/bootstrap/dist/js/bootstrap.js'
// @codekit-prepend '../../bower_components/jquery-oembed-all/jquery.oembed.js'
// @codekit-prepend '../../bower_components/jquery-ui/jquery-ui.js'
// @codekit-prepend '../../bower_components/markerwithlabel-v3/markerwithlabel.js'

// accordion
$(document).ready(function(){
  "use strict";
 jQuery( "#accordion" ).accordion();
 });

// embed stuff for talks

 jQuery(function() {
   "use strict";
    $("a.embed").oembed();
});

// google maps
(function() {
  "use strict";
    var cx = '008769174023796316711:pj3syggtkz0';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

function getMonth(d) {
  "use strict";
    var dt = new Date(d);
    var dtm = dt.getMonth();
    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[dtm];
}

// stuff to highlight current month
(function() {
  "use strict";
    var now = new Date();

    $('.left-nav-months').text(function (i, v) {

    if (getMonth(now) == v) {
      $(this).addClass('current');
    }

  });


})();

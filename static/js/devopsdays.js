// accordion
$( "#accordion" ).accordion(); // TODO: should only be included on program pages

// embed stuff for talks

$(function() {
    $("a.embed").oembed();
});

// google maps
(function() {
    var cx = '008769174023796316711:pj3syggtkz0';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

// stuff to highlight current month

var now = new Date;

$('.left-nav-months').text(function (i, v) {

if (getMonth(now) == v) {
  $(this).addClass('current');
}

});

function getMonth(d) {
var dt = new Date(d);
var dtm = dt.getMonth();
var month = new Array();
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
return month[dtm]
}

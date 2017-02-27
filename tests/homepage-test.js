// homepage-test.js
var url = casper.cli.options.url;
var siteName = 'devopsdays';

casper.test.begin('Home Page Has What We Expect', 1, function suite(test) {
    casper.start(url, function() {
        test.assertTitle(siteName, "homepage title is the one expected");
    });

    casper.run(function() {
        test.done();
    });
});

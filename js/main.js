var scanner = cordova.require("cordova/plugin/BarcodeScanner");



$(function() {

  window.plugins.childBrowser.showWebPage('http://www.google.com',
                                        { showLocationBar: true });

  $('#consoleTest').on('click', function () {
    console.log("Button clicked");
  });
     
	$('#qrTest').on('click', function () {
   scanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
	});

  var screenHeight = $(window).height();

  $('.homepage').height(screenHeight);

 });
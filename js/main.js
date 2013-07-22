var scanner = cordova.require("cordova/plugin/BarcodeScanner");



$(function() {

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

  $('.home').height(screenHeight * 2);

 });
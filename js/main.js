var scanner = cordova.require("cordova/plugin/BarcodeScanner");

$(function() {
     
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

 });
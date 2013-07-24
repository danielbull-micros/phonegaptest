var scanner = cordova.require("cordova/plugin/BarcodeScanner");
var ref = window.open('http://apache.org', '_blank', 'location=yes');
var myCallback = function() { alert(event.url); }
ref.addEventListener('loadstart', myCallback);
ref.removeEventListener('loadstart', myCallback);

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
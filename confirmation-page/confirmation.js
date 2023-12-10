function requestFullScreen() {

  var el = document.body;

  // Supports most browsers and their versions.
  var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen
    || el.mozRequestFullScreen || el.msRequestFullScreen;

  if (requestMethod) {

    // Native full screen.
    requestMethod.call(el);

  } else if (typeof window.ActiveXObject !== "undefined") {

    // Older IE.
    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

function openConfirmation(){
  let purchasePage = document.getElementById("purchase-page");
  purchasePage.classList.add("hidden");
  let confirmationPage = document.getElementById("confirmation-page");
  confirmationPage.classList.remove("hidden");
}

function openPurchase(){
  let purchasePage = document.getElementById("confirmation-page");
  purchasePage.classList.add("hidden");
  let confirmationPage = document.getElementById("purchase-page");
  confirmationPage.classList.remove("hidden");
}


//Not using:


document.querySelector('.back-button').addEventListener('click', function () {
  window.history.back();
});

function onFullScreenChange() {
  if (document.fullscreenElement) {
    document.body.style.backgroundColor = 'white'; // or any other color
  } else {
    document.body.style.backgroundColor = ''; // resets to default
  }
}

document.addEventListener('fullscreenchange', onFullScreenChange);


var defferedPrompt;

// check browser support
if('serviceWorker' in navigator) {

  //REGISTER serviceWorker
  navigator.serviceWorker
  .register('/sw.js')
  .then(function() {
    console.log('Service Worker registered! ');
  });
}

//Deffered banner for installation
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('Before install prompt Fired..>!!');
  event.preventDefault();
  defferedPrompt = event;
  return false;
})

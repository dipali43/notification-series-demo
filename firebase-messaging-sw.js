importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');
if ('serviceWorker' in navigator) {
  console.log('if parttttttttttttt');
    navigator.serviceWorker.register('firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }else{
      console.log('else parttttttttttt');
    }

firebase.initializeApp({
  messagingSenderId: "423113646847",
})

const initMessaging = firebase.messaging()
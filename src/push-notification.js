import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '655927562145' // troque pelo seu sender id 
  });

  // use other service worker
  // navigator.serviceWorker
  //   .register('/my-sw.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  //   });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log(messaging)
    console.log('user token: ', token);
    alert(token);

    messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      alert(payload.notification.body)
      console.log(payload.notification)
      console.log(payload.body)
      // ...
    });


    return token;
  } catch (error) {
    console.error(error);
  }
}



const multer = require('multer');
const firebase = require('firebase/app');
const path = require('path')
const FirebaseStorage = require('multer-firebase-storage')
const {getStorage} = require('firebase/storage')

const upload =  multer({
    storage: FirebaseStorage({
        bucketName: 'your-default-bucket',
        credentials: {
            clientEmail:"damianrocio12@gmail.com",
            privateKey:"AIzaSyDF1Qsttjbn_p8HLcninq7wHsJpiROQOPs",
            projectId:"mayorista-43392"         
        }
    })
})

  const app = firebase.initializeApp(firebaseConfig);
  const storage = getStorage(app)


/* const upload = multer({ storage: multer.memoryStorage()}); */




module.exports = { upload,storage };


/* firebaseConfig = {
    apiKey: "AIzaSyDF1Qsttjbn_p8HLcninq7wHsJpiROQOPs",
    authDomain: "mayorista-43392.firebaseapp.com",
    projectId: "mayorista-43392",
    storageBucket: "mayorista-43392.appspot.com",
    messagingSenderId: "373843119848",
    appId: "1:373843119848:web:c4b54b674300dcc238035d",
    measurementId: "G-V81502G174"
  }; */
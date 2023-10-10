const firebase = require('firebase/app');
const path = require('path')
const {storage,ref,uploadBytes,getDownloadURL} = require('firebase/storage')

const initialFirebase = () =>{
  const firebaseConfig = {
    apiKey: "AIzaSyDF1Qsttjbn_p8HLcninq7wHsJpiROQOPs",
    authDomain: "mayorista-43392.firebaseapp.com",
    projectId: "mayorista-43392",
    storageBucket: "mayorista-43392.appspot.com",
    messagingSenderId: "373843119848",
    appId: "1:373843119848:web:c4b54b674300dcc238035d",
    measurementId: "G-V81502G174"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const storage = getStorage(app)

}

const uploadFile = async(file) =>{
  try {
    const storageRef = ref(storage, `productos/${"Product" + '-' + Date.now() + path.extname(file.originalname)}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.log(error);
  }
}


  
  module.exports = {uploadFile,storage};
  
const { ref, uploadBytes, getDownloadURL, uploadBytesResumable } = require('firebase/storage')
const { storage } = require('../middlewares/uploadMiddleware')
const uploadFile = async (file, folder, fileName) => {
    try {
        const storageRef = ref(storage, `${folder}/${fileName}`);
        const metadata = {
            contentType: file.mimetype,
        };
        const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL
    } catch (error) {
        return error
    }
}

module.exports = {uploadFile}
const { ref, deleteObject, getDownloadURL, uploadBytesResumable } = require('firebase/storage')
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

const deleteFile = async (folder, fileName) => {
    try {
        const imageRef = ref(storage, `${folder}/${fileName}`);
        await deleteObject(imageRef);
        return `Imagen ${fileName} en la carpeta ${folder} eliminada correctamente.`
    } catch (error) {
        console.error('Error al eliminar la imagen:', error);
    }
}



module.exports = { uploadFile, deleteFile }
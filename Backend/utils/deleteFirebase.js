const { ref, deleteObject } = require('firebase/storage');
const { storage } = require('../middlewares/uploadMiddleware');

const deleteFile = async (folder, fileName) => {
    try {
        const imageRef = ref(storage, `${folder}/${fileName}`); 
        await deleteObject(imageRef);
        console.log(`Imagen ${fileName} en la carpeta ${folder} eliminada correctamente.`);
    } catch (error) {
        console.error('Error al eliminar la imagen:', error);
    }
}



module.exports = { deleteFile };

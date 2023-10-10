const {ref,uploadBytes,getDownloadURL} = require('firebase/storage')
const {storage} = require('../middlewares/uploadMiddleware')

const uploadFile = async (file) => {
    try {
        const storageRef = ref(storage, `productos/${"Product" + '-' + Date.now() + path.extname(file.originalname)}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { uploadFile }
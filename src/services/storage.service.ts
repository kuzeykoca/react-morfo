import CryptoJS from "crypto-js"

//Local storage data will be encrypted / its not any logical as long as those key and iv are accessable from browser -- front end
//Just some en/de/cryption practice ;)

const pass: any = process.env.APP_SECRET
const StorageItemKey = "datacontext"

export const dataContext = (isEncrypted = false) => {
    const dataset = ReadStorage(isEncrypted)
    if(dataset.status){
        return dataset.message
    }
    return {
        data: null
    }
}


export const ReadStorage = (isEncrypted = false) => {
    try {
        const serializedContext = sessionStorage.getItem(StorageItemKey)
        if (serializedContext === null) {
            return {
                status: false,
                message: "Context is empty"
            }
        }
        
        const data = isEncrypted ? CryptoJS.AES.decrypt(serializedContext, pass).toString(CryptoJS.enc.Utf8) : serializedContext
        const JSONdecrypted = JSON.parse(data)
        
        return {
            status: true,
            message: JSONdecrypted
        }
    } catch (e: any) {
        return {
            status: false,
            message: e.message
        }
    }
}

export const WriteStorage = (context: any, isEncrypted = false) => {
    try {
        if(!context){
            return {
                status: false,
                message: "Context cannot be empty"
            }
        }
        const serializedContext = JSON.stringify(context)
        let data: any = serializedContext
        if(isEncrypted){
            data = CryptoJS.AES.encrypt(serializedContext, pass)
        }
        sessionStorage.setItem(StorageItemKey, data)
        return {
            status: true,
            message: "Context has written successfuly"
        }
    } catch (e: any) {
        return {
            status: false,
            message: e.message
        }
    }
}

export const DestroyDestroy = () => {
    try {
        sessionStorage.removeItem(StorageItemKey)
        return true
    } catch (e) {
        return e
    }
}
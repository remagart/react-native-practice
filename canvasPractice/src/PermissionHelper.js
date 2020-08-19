import {PermissionsAndroid} from "react-native";

const StoragePermissions = [
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
];

export default class PermissionHelper {
    static requestStoragePermission = async () => {
        try{
            return await PermissionsAndroid.requestMultiple(StoragePermissions);
        }catch(err){
            console.log('requestStoragePermission error !', err);
        }
    }

    static checkStoragePermission = async () => {
        try{
            return await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            );
        }catch(err){
            console.log('checkPermission error !', err);
        }
    }
}
import { PermissionsAndroid } from 'react-native';

export const NEVER_ASK_AGAIN = PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN;
export const StoragePermissions = [
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
];

export default class PermissionHelper {
    /*
    * 彈出提示框向用戶請求某項權限。返回一個promise，最終值為用戶是否同意了權限申請的布爾值。
    * 其中rationale參數是可選的，其結構為包含title和message)的對象。
    * 此方法會和系統協商，是彈出系統內置的權限申請對話框，
    * 還是顯示rationale中的信息以向用戶進行解釋。
    * */

   static async requestStoragePermission() {
        try {
            return await PermissionsAndroid.requestMultiple(StoragePermissions);
        } catch (err) {
            console.log('requestStoragePermission error !', err);
        }
    }

    static async checkStoragePermission() {
        try {
            return await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            );
        } catch (err) {
            console.log('checkPermission error !', err);
        }
    }

}
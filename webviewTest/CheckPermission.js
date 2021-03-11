import PermissionHelper,{StoragePermissions,NEVER_ASK_AGAIN} from "./PermissionHelper";
import {Platform,ToastAndroid} from "react-native";

/**
 * @description Check Andoid permission of storage and then do something
 * @param {Function} toDoFunc The thing which you want to do after ckecking permission 
 */
export const CheckStorage = async (toDoFunc) => {
    if(Platform.OS === "android"){
        try{
            let reqResponse = await PermissionHelper.requestStoragePermission();
            console.log("reqResponse",reqResponse);
            let isNeverAskedAgain = false;
            for(let i = 0;i < StoragePermissions.length;i++){
                if(reqResponse[StoragePermissions[i]] === NEVER_ASK_AGAIN) isNeverAskedAgain = true;
            }

            if(isNeverAskedAgain){
                throw new Error("no permission")
            }
            else{
                let chkResponse = await PermissionHelper.checkStoragePermission();
                if(chkResponse === true){
                    if(toDoFunc && typeof toDoFunc === "function")  toDoFunc();
                }
                else throw new Error("Permission denied from user");
            }

        }catch(err){
            console.log("CheckStorage err",err);
            ToastAndroid.show("err",ToastAndroid.LONG);
            throw new Error(err);
        }
    }
    else if(Platform.OS === "ios"){
        if(toDoFunc && typeof toDoFunc === "function")  toDoFunc();
    }
}
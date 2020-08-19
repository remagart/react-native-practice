import React, { Component } from 'react';
import { View, Text,Alert,Platform } from 'react-native';
import RNFetchBlob from "rn-fetch-blob";
import RNFS from "react-native-fs";
import PermissionHelper from './PermissionHelper';

export const checkAndroid = () => {
    if(Platform.OS === "android"){
        try{
            return PermissionHelper.requestStoragePermission()
            .then(res => {
                if(res['android.permission.READ_EXTERNAL_STORAGE'] === "never_ask_again"
                || res['android.permission.WRITE_EXTERNAL_STORAGE'] === "never_ask_again"){
                    Alert.alert(
                        '',
                        "請打開權限"
                    )
                }
                else{
                    return PermissionHelper.checkStoragePermission()
                    .then(async (res) => {
                        if(res == true){
                            let a = await getLocalPath();
                            return a;
                        }
                        else {
                            console.log('Storage Permission not granted !');
                        }
                    })
                    .catch(err => console.error(err));
                }
            })
            .catch(err => console.error(err));
        }catch(err){
            console.log('PermissionHelper.requestStoragePermission() failed ! err: ', err);
        }
    }
    else{
        return getLocalPath();
    }
    
}

const getLocalPath = async () => {
    let spaceInfo = await RNFS.getFSInfo();
    if(spaceInfo.freeSpace > (1024 * 1024 * 10)){
        let path = (Platform.OS === "android" ?
            RNFS.ExternalStorageDirectoryPath
        :   RNFS.DocumentDirectoryPath) + "/Download/" + "123.pdf";

        return path;
    }
    else{
        Alert.alert(
            "",
            "空間不夠囉",    
        );
    }
}

export const createPDF = (path,pdf64) => {
    console.log("hello",path);

    RNFS.writeFile(path,pdf64, "base64")
    .then((success)=>{
        console.log('FILE WRITTEN'+' '+path);
        console.log("success",success);
    })
    .catch((err)=>{
        console.log(err);
    });
}



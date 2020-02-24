import {Platform} from "react-native";
import RNIap,{
    purchaseUpdatedListener,
    purchaseErrorListener,
} from "react-native-iap";

const BUNDLE_ID = Platform.select({
    ios: "",
    android: "com.myiaptest"
})

export default class InAppPurchase {

    static purchaseUpdateListener = null;
    static purchaseErrorListener = null;

    purchaseListener = () => {
        this.purchaseUpdateSubscription();
        this.purchaseErrorSubscription();
    }

    purchaseUpdateSubscription = () => {
        console.log("purchaseUpdateListener start... ");
        InAppPurchase.purchaseUpdateListener = purchaseUpdatedListener((purchase)=>{
            console.log("purchase updated",purchase);
        })
    }

    purchaseErrorSubscription = () => {
        console.log("purchaseErrorListener start... ");
        InAppPurchase.purchaseErrorListener = purchaseErrorListener((error)=>{
            console.log("purchase error",error);
        })
    }

    // TODO: 不能用，因為我們沒有消耗型產品
    restoreAndroidPurchaseStatus = async () => {
        try{
            let restoreResult = await RNIap.consumeAllItemsAndroid();
            if(restoreResult === true){
                console.log("Restore Android setting, and it is available to purchase again");
            }
            else{
                console.log("restoreResult is false",restoreResult);
            }
        }catch(err){
            console.log("Nothing needs to be restore, and it is available to purchase");
        }
    }

    initIAP = async (itemSkus) => {
        try{
            let time = String(new Date().getTime());
            itemSkus = [...itemSkus,time];
            let result = await RNIap.initConnection();
            let products = await RNIap.getProducts(itemSkus);
            console.log("result",result);
            console.log("products",products);
            return products[0];
        }catch(err){
            console.log("init IAP failure",err);
        }
    }

    removeIAP = async () => {
        if(InAppPurchase.purchaseUpdateListener){
            InAppPurchase.purchaseUpdateListener.remove();
            InAppPurchase.purchaseUpdateListener = null;
            console.log("InAppPurchase.purchaseUpdateListener",InAppPurchase.purchaseUpdateListener);
        }

        if(InAppPurchase.purchaseErrorListener){
            InAppPurchase.purchaseErrorListener.remove();
            InAppPurchase.purchaseErrorListener = null;
            console.log("InAppPurchase.purchaseErrorListener",InAppPurchase.purchaseErrorListener);
        }
    }

    requirePurchase = async (itemSkus) => {
        
        // if(Platform.OS === "android") await this.restoreAndroidPurchaseStatus();

        try{
            let purchaseObj = await RNIap.requestPurchase(itemSkus[0]);
            console.log("purchaseObj",purchaseObj);
            return purchaseObj;
        }catch(err){
            console.log("Purchase failure",err.message);
            return;
        }
    }

    finishTransaction = async (purchaseObj) => {
        try{
            await RNIap.finishTransaction(purchaseObj,false);
            console.log("Transaction success...");
        }catch(err){
            console.log("Transaction failure...");
        }
    }

    getAvailable = async () => {
        try{
            let available = await RNIap.getAvailablePurchases();
            console.log("getAvailable",available);
            // return available;
        }catch(err){
            console.log("getAvailable error",err);
        }
    }

    /**
     * From react-native-iap,Validate receipt for Android.
     * 
     * @param {string} packageName package name of your app.
     * @param {string} productId product id for your in app product.
     * @param {string} productToken token for your purchase.
     * @param {string} accessToken accessToken from googleApis.
     * @param {boolean} isSub whether this is subscription or inapp. `true` for subscription.
     * @returns {Promise<object>}
     */
    validateReceiptAndroid = async (receipt) => {
        let token = "ya29.c.Ko8BvwcD6nHBNJ1bCqHqnkCdNqehHa-luTo65rV2PtLH8UKBDY_PbuIQachU0Zu0OI4HmuWECtrt-RAZRzSDbS65SHJ9SP_yqFn85cdLbSe9JJFyeIRsGDMxgOCzGaKmcI4wlPHILA8Hw-Lurwk2ssjZP0i_zxxla87afwGfBy4SHADYaoP10DWnvUYdtme1tlU";
        receiptJSON = JSON.parse(receipt);
        console.log("receiptJSON",receiptJSON);
        try{
            if(receiptJSON){
                let bundleId =  receiptJSON.packageName;
                let productId =  receiptJSON.productId;
                let productToken =  receiptJSON.purchaseToken;
                let accessToken =  token;
                let isSubscription = false;

                responseJSON = await RNIap.validateReceiptAndroid(bundleId,productId,productToken,accessToken,isSubscription);

                // url = 'https://www.googleapis.com/androidpublisher/v3/applications' + ("/" + bundleId + "/purchases/products" + "/" + productId) +("/tokens/" + productToken + "?access_token=" + accessToken);

                // let response = await fetch(url, {
                //         method: 'GET',
                //         headers: new Headers({ Accept: 'application/json' }),
                //     });
                
                // let responseJSON = await response.text();
    
                console.log("validateReceiptAndroid",responseJSON);
                
                return (responseJSON && responseJSON.purchaseState == 0)? true : false;
            }
        }catch(err){
            console.log("validateReceiptAndroid error",err);
        }
    } 




}

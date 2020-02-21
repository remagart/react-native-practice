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
            await this.purchaseListener();
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
    validateReceiptAndroid = (purchaseObj) => {
        if(purchaseObj){
            let bundleId =  BUNDLE_ID;
            let productId =  purchaseObj.productId;
            let productToken =  purchaseObj.purchaseToken;
            let accessToken =  "";
            let isSubscription = false;

        }
    } 


}

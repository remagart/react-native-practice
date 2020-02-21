import React, { Component } from 'react';
import { View, Text,StyleSheet,Platform,TouchableOpacity } from 'react-native';
import RNIap, { 
  purchaseErrorListener,
  purchaseUpdatedListener,
  // InAppPurchase,
  // SubscriptionPurchase,
  // ProductPurchase,

} from 'react-native-iap';

import InAppPurchase from "./InAppPurchase";

const itemSkus = Platform.select({
  ios: [
    'com.example.coins100'
  ],
  android: [
    // "asd123456",
    "esd123456",
    // "csd123456",
    // "android.test.purchased",
  ]
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.IAP = new InAppPurchase();
    this.purchaseUpdateSubscription = null;

    this.state = {
      test: "123",
      price: "123",
    };
  }

  async componentDidMount(){
    let price = await this.IAP.initIAP(itemSkus);
    this.setState({
      test: price.title,
      price: price.price,
    });
  }

  componentWillUnmount(){
    this.IAP.removeIAP();
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

  purchaseListener = () => {
    console.log('xxx');
    this.purchaseUpdateSubscription = purchaseUpdatedListener((purchase) =>{
      console.log('purchaseUpdatedListener', purchase);
      this.setState({test: purchase.transactionReceipt});
    })
  }

  onClickedBuy = async () => {
    let purchaseObj = await this.IAP.requirePurchase(itemSkus);
    if(purchaseObj && purchaseObj.transactionReceipt){
      // TODO: 這邊需做call後端，然後得到success後往下做
      // TODO: 不知道做了什麼
      // this.IAP.finishTransaction(purchaseObj);
      this.aa = purchaseObj;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> App </Text>
        <TouchableOpacity onPress={()=>{this.onClickedBuy()}}>
          <View style={styles.btnView}>
            <Text>買！</Text>
          </View>
        </TouchableOpacity>
        
        <Text>==={this.state.test}===</Text>
        <Text>==={this.state.price}===</Text>

        <TouchableOpacity onPress={()=>{this.IAP.initIAP(itemSkus);}}>
          <View style={styles.btnView}>
            <Text>init</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.IAP.getAvailable();}}>
          <View style={styles.btnView2}>
            <Text>available</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.IAP.finishTransaction(this.aa);}}>
          <View style={styles.btnView}>
            <Text>finishTransaction</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={async ()=>{await this.IAP.restoreAndroidPurchaseStatus();}}>
          <View style={styles.btnView2}>
            <Text>restore android</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnView:{
    width: 200,
    height: 40,
    backgroundColor: "#AADDFF",
    alignItems: "center",
    justifyContent: "center",
  },
  btnView2:{
    width: 200,
    height: 40,
    backgroundColor: "#AA99FF",
    alignItems: "center",
    justifyContent: "center",
  },
})

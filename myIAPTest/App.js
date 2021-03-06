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

    this.state = {
      test: "123",
      price: "123",
    };
  }

  async componentDidMount(){
    await this.IAP.purchaseListener();
    
    let price = await this.IAP.initIAP(itemSkus);
    this.setState({
      test: price.title,
      price: price.price,
    });
  }

  componentWillUnmount(){
    this.IAP.removeIAP();
  }

  isValidateSuccess = async (receipt) => {
    if(Platform.OS == "android"){
      return this.IAP.validateReceiptAndroid(receipt);
    }
    else{
      return;
    }
  }

  finishTransaction = async (purchaseObj) => {
    if(Platform.OS == "android"){
      await this.IAP.finishTransaction(purchaseObj);
    }
    else{

    }
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

  onClickedBuy2 = async () => {
    let purchaseObj = await this.IAP.requirePurchase(itemSkus);

    if(purchaseObj && purchaseObj.transactionReceipt){
      if(await this.isValidateSuccess(purchaseObj.transactionReceipt)){
        console.log("validateReceipt success");
        await this.finishTransaction(purchaseObj);
      }
      else{
        console.log("validateReceipt fail");
      }
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

        <TouchableOpacity onPress={()=>{this.IAP.validateReceiptAndroid(this.aa.transactionReceipt);}}>
          <View style={styles.btnView}>
            <Text>validate  Android</Text>
          </View>
        </TouchableOpacity>

        <View style={{height: 30}}/>

        <TouchableOpacity onPress={async ()=>{this.onClickedBuy2()}}>
          <View style={styles.btnView2}>
            <Text>我就買!</Text>
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

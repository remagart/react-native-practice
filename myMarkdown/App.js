import React, { useEffect,useState } from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import MarkdownIt from "markdown-it";
import Html from "react-native-render-html";

const SAMPLE = '# APP退費流程說明<br><br><br>## Android<br>### Android規定<br>- 可由公司主動退費給消費者 ([瞭解 Google Play 退款相關資訊](https://support.google.com/googleplay/answer/2479637))<br>- 也可由消費者主動向Google**申請退**費(期限2天)<br>- [x] test1<br>- [x] test2<br>- H~2~O<br>- 29^th^<br>- ++inserted++<br><br><br>### 退款所需時間<br>- [提出退款申請後，通常可在 15 分鐘內獲得結果，最多則可能要等待 4 個工作天。](https://support.google.com/googleplay/answer/2479637)<br><br><br>### 消費者申請流程<br>- 聯繫我們公司客服，開發團隊可以協助退款<br><br>```javascript<br>import aaa from "react-native"<br>```<br><br><br><br>---<br><br><br>## IOS<br>### IOS規定<br>- 我們公司沒辦法主動要求Apple退款，須由消費者主動向Apple申訴 (reference: https://developer.apple.com/forums/thread/123329)<br>- IOS App購買不適用於7天鑑賞期([「您了解並同意我們提供的服務及內容不適用當地消費者保護法案中所規定的七日無條件退款之要求。」](https://www.apple.com/legal/internet-services/itunes/tw/terms.html)) <br>- IOS App購買於90天內為有條件的退款(需要提供原因)<br><br><br>### 退款所需時間<br>- [提出退款申請後，您會在 48 小時內接到更新](https://support.apple.com/zh-tw/HT210904)<br><br><br>### 消費者申請流程<br>1. 至 https://reportaproblem.apple.com/ 即可申請退款<br>![](https://i.imgur.com/mWHkeqt.png)<br>2. 建議選擇第一個：我原先無意購買此項目，來申請退款 <br>3. 等待Apple人員回覆<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'; 
const BR = /\<br\>/gi;

const App = () => {

  const [HtmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    let md = new MarkdownIt();
    let s = SAMPLE.replace(BR,"\n");
    let result = md.render(s);
    console.log("re",result);
    // setHtmlContent(`<a href="https://www.google.com">123</a>`);
    setHtmlContent(result);
  }, []);

  const onClickedLinked = (a,b) => {
    console.log("bbb");
    console.log("a",a);
    console.log("b",b);
  }

  return(
    <ScrollView style={styles.container}>
      {(HtmlContent !== "")?
        <Html 
          html={HtmlContent}
          onLinkPress = {onClickedLinked}
        /> : null
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDFFEE"
  }
})


export default App;
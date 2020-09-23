import React, { useEffect,useState } from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import MarkdownIt from "markdown-it";
import Html from "react-native-render-html";
import MDSub from 'markdown-it-sub';
import MDSup from 'markdown-it-sup';
import MDIns from 'markdown-it-ins';
import MDAnchor from 'markdown-it-anchor';
import hljs from 'highlight.js';
import MDTaskLists from '@hackmd/markdown-it-task-lists';
import { DOMParser, XMLSerializer } from 'xmldom';

const SAMPLE = '# APP退費流程說明<br><br><br>## Android<br>### Android規定<br>- 可由公司主動退費給消費者 ([瞭解 Google Play 退款相關資訊](https://support.google.com/googleplay/answer/2479637))<br>- 也可由消費者主動向Google**申請退**費(期限2天)<br>- [x] te**st**189hj~~mkhjk~~<br>- [ ] test2<br>  - [ ] ttt<br>  - [x] aaa<br>  - [ ] ddd<br>[ ] hhh<br>1. [x] sss<br>2. [ ] eeeee<br>- H~2~O<br>- 29^th^<br>- ++inserted++<br><br><br>### 退款所需時間<br>- [提出退款申請後，通常可在 15 分鐘內獲得結果，最多則可能要等待 4 個工作天。](https://support.google.com/googleplay/answer/2479637)<br><br><br>### 消費者申請流程<br>- 聯繫我們公司客服，開發團隊可以協助退款<br><br>```javascript<br>import aaa from "react-native"<br>```<br><br><br><br>---<br><br><br>## IOS<br>### IOS規定<br>- 我們公司沒辦法主動要求Apple退款，須由消費者主動向Apple申訴 (reference: https://developer.apple.com/forums/thread/123329)<br>- IOS App購買不適用於7天鑑賞期([「您了解並同意我們提供的服務及內容不適用當地消費者保護法案中所規定的七日無條件退款之要求。」](https://www.apple.com/legal/internet-services/itunes/tw/terms.html)) <br>- IOS App購買於90天內為有條件的退款(需要提供原因)<br><br><br>### 退款所需時間<br>- [提出退款申請後，您會在 48 小時內接到更新](https://support.apple.com/zh-tw/HT210904)<br><br><br>### 消費者申請流程<br>1. 至 https://reportaproblem.apple.com/ 即可申請退款<br>![](https://i.imgur.com/mWHkeqt.png)<br>2. 建議選擇第一個：我原先無意購買此項目，來申請退款 <br>3. 等待Apple人員回覆<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'; 
const BR = /\<br\>/gi;

const App = () => {

  const [HtmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    let md = new MarkdownIt()
                .use(MDTaskLists)
                .use(MDSub)
                .use(MDSup)
                .use(MDIns);

    // The "\n" represents to <br> from backend, so we need to replace it to fit to format of markdown.
    let s = SAMPLE.replace(BR,"\n");
    let result = md.render(s);
    // After transforming from markdown to html, we need to delete "\n"
    result = result.replace(/\n/g,"");
    
    if(result){
      const doc = new DOMParser().parseFromString('<div>' + result + '</div>', 'text/html');
      const input = doc.getElementsByTagName("input");

      if(input && input.length > 0){
        // Handle all input tag
        for(let i = 0;i < input.length;i++){
          let doc_tmp = new DOMParser().parseFromString("<div></div>");
          let div = doc_tmp.getElementsByTagName("div");

          // Add the attribute to input so that renderHtml can handle it -->
          // To avoid using common address
          let node = input.item(i).parentNode.cloneNode(true).firstChild;

          while(node != null){
            if(node.data || (node.tagName != "input" && node.tagName != "ul" && node.tagName != "ol")){
              // Because "appendChild" defined to moving rather than copying, we need to clone the new one to do it
              let temp = node.cloneNode(true);
              div.item(0).appendChild(temp);
            }
            node = node.nextSibling;
          }
          
          let str = new XMLSerializer().serializeToString(doc_tmp);
          input.item(i).setAttribute("msg",str);
          // Add the attribute to input so that renderHtml can handle it <--

          // Delete the content after input tag -->
          let li_parentN = input.item(i).parentNode
          let li_childN = li_parentN.childNodes;
          let len = li_parentN.cloneNode(true).childNodes.length;
          
          // "removeChild" would affect the node in the end, so we reverse to handle it
          for(let j = len - 1;j >= 0;j--){
            if(li_childN.item(j).data || (li_childN.item(j).tagName != "input" && li_childN.item(j).tagName != "ul" && li_childN.item(j).tagName != "ol")){
              li_parentN.removeChild(li_childN.item(j));
            }
          }
          // Delete the content after input tag <--

          result = new XMLSerializer().serializeToString(doc);
        }
      }
    }
    setHtmlContent(result);
  }, [HtmlContent]);

  const onClickedLinked = (a,b) => {
    console.log("b",b);
  }

  return(
    <ScrollView style={styles.container}>
      <Text>fghjkl</Text>
      {(HtmlContent !== "")?
        <Html 
          html={HtmlContent}
          onLinkPress = {onClickedLinked}
          ignoredTags = {[]}
          renderers={
            {
              input: (htmlAttribs, children, convertedCSSStyles, passProps) => (
                <View key = {passProps.key} style={{flexDirection:"row"}}>
                    <View style={{width:100,height: passProps.baseFontStyle.fontSize * 1.3,backgroundColor: "#FFF"}}/>
                    <Html 
                      html = {`${htmlAttribs.msg}`}
                    />
                </View>
              )
            }
          }
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
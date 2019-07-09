import React, { Component } from 'react'
import { Text, View,ScrollView,StyleSheet,TextInput,WebView } from 'react-native'
import MyHtml from "react-native-render-html";
import Mytest from "./test";

const htmlContent = `
    <h1> Test </h1>
    <p> this is test tttt ttsxa</p>
    <p> uwuwudjcn j </p>
    <br />
    <p> aaaa </p>
    ooxx
    <ol>
        <li>aaa</li>
        <li>bbb</li>
    </ol>
    <ol>
        <li>zzz</li>
        <li>xxx</li>
    </ol>
    <p>sssssssssssssss</p>
    <table>
        <tr>
            <td>aaa</td>
            <td>bbb</td>
            <td>ccc</td>
        </tr>
        <tr>
            <td>ddd</td>
            <td>eee</td>
            <td>fff</td>
        </tr>
    </table>
`;

const htmlContent2 = `
    <p>tttt</p>
`;

const htmlContent3 = `
    zzzzz
`;

const htmlContent4 = `
    appleapple
    <div></div>
    cattcattcatt
`;

const htmlContent5 = `
    aaa<p>people</p>aaa
`;
const htmlContent6 = `
    bbb</br>people</br>bbb
`;

export default class mySectionList extends Component {

    mydisplay = () =>{
        return (
            <MyHtml html={htmlContent}/>
        );
    }
    myTableFunc = () => {
        this.mytable = htmlContent;
        let temp = htmlContent.match(/(<table(?:.|\n)*?<\/table>)/g);
        temp.map((item)=>{
            this.mytable = this.mytable.replace(item, `<iframe srcdoc="${item}"></iframe>`);
        });
    }
    render() {
        this.myTableFunc();
        return (
            <ScrollView>
                <Text>hihi</Text>
                {/* <MyHtml html = {htmlContent} textSelectable = {true} /> */}
                {/* <MyHtml html = {htmlContent2} textSelectable = {true} />
                <MyHtml html = {htmlContent3} textSelectable = {true} />
                <MyHtml html = {htmlContent4} textSelectable = {true} /> */}
                <MyHtml html = {htmlContent5} textSelectable = {true} />
                <MyHtml html = {htmlContent6} textSelectable = {true} />
            </ScrollView>
        )
    }
}

const mystyles = StyleSheet.create({
    mytxt:{
        marginTop: 30,
        marginLeft: 30,
    },
    myedit:{
        margin: 0,
        padding: 0,
    },
})


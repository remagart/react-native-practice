import React, { useEffect,useState } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import {PDFDocument,StandardFonts,rgb} from "pdf-lib";
import HTML from "react-native-render-html";
import RNFetchBlob from "rn-fetch-blob";
import {checkAndroid,createPDF} from './src/DownloadModule';

const PDFCreate = () => {
    const [Byte, setByte] = useState("");
    const [Path, setPath] = useState("");

    useEffect(() => {
        
        const getPath = async () => {
            let res = await checkAndroid();
            setPath(res);
        }
        getPath();
        // handlePDF();

        return () => {
            console.log("Path",Path);
            // createPDF(Path);
        }
    },[]);

    const getIframe = (doc) => {
        return `<html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <div>123</div>
            <iframe src="${doc}" frameborder="0">${doc}</iframe>
            <div>456</div>
        </body>
        </html>`;
    }

    const handlePDF = async () => {
        const pdfDoc = await PDFDocument.create();
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        const page = pdfDoc.addPage();
        const {width,height} = page.getSize();
        const fontSize = 30;
        page.drawText("Hello pdf",{
            x: 50,
            y: height - 4 * fontSize,
            font: timesRomanFont,
            color: rgb(0,0.53,0.71)
        });

        const pdfBytes = await pdfDoc.save();
        let by = getIframe(pdfBytes);
        // console.log("xx",by);
        setByte(by);
    }

    return (
        <View style={styles.container}>
            <Text> textInComponent </Text>
            {/* <ScrollView>
                <HTML 
                    html={Byte}
                />
            </ScrollView> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default PDFCreate;

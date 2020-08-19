import React, { useEffect,useState } from 'react'
import { Text, View, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
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
        handlePDF();
    },[]);

    const clickedBtn = () => {
        console.log("Path",Path);
        if(Path){
            createPDF(Path,Byte);
        }
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

        const pdf64 = await pdfDoc.saveAsBase64();
        setByte(pdf64);
    }

    return (
        <View style={styles.container}>
            <Text> textInComponent </Text>
            <TouchableOpacity onPress={()=>{clickedBtn()}}>
                <View style={styles.btn}>
                    <Text>clicked me</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn:{
        width: 200,
        height: 200,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    }
})


export default PDFCreate;

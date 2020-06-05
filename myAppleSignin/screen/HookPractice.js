import React, { useState,useEffect } from 'react'
import {Text, View,SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native'
import ToastComponent from '../component/ToastComponent';

HookPractice = () => {
    const [count,setCount] = useState(10);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    onClickedBtn = () => {
        ToastComponent.showToast(`clicked: ${count}`,ToastComponent.STATUS_TOAST.DEFAULT);
        setCount(count+1);
    }

    onClickedBtn2 = () => {
        ToastComponent.showToast(`clicked2: ${count}`,ToastComponent.STATUS_TOAST.DEFAULT);
        setAge(age-1);
    }

    useEffect(()=>{
        // after every render,
        // like componentDidMount and componentDidUpdate
        console.log("useEffect1",count);

        return () => {
            // exec before running the effects next time
            console.log("after useEffect1",count);
        }
    },[count]);

    useEffect(()=>{
        // like componentDidMount
        console.log("useEffect2",count);

        return () => {
            // componentWillUnmount
            console.log("after useEffect2",count);
        }
    },[]);

    useEffect(()=>{
        console.log("useEffect3",age);
    },[age]);

    renderBtn1 = () => {
        return (
            <TouchableOpacity onPress={onClickedBtn}>
                <View style={styles.btnStyle}>
                    <Text>count: {count}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    renderBtn2 = () => {
        return(
            <TouchableOpacity onPress={onClickedBtn2}>
                <View style={styles.btnStyle}>
                    <Text>age: {age}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderBtn1(count)}
            {renderBtn2(age)}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#AADDCC",
        justifyContent: "center",
        alignItems: "center",
    },
    btnStyle:{
        width: 200,
        height: 50,
        backgroundColor: "#FFDDCC",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32,
    }
})


export default HookPractice;
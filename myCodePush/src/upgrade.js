import CodePush from "react-native-code-push";

export default myupgrade = {
    myfunc(){
        console.log("updatetetete");
        CodePush.sync({
            updateDialog: {
                appendReleaseDescription: true,
                descriptionPrefix:'\n\n更新内容：\n',
                title:'更新',
                mandatoryUpdateMessage:'',
                mandatoryContinueButtonLabel:'更新',
            },
            mandatoryInstallMode:CodePush.InstallMode.IMMEDIATE,
            deploymentKey: "bgCyxUhmgoEvjdJsG1xD0M2k0tsP23366673-b448-461f-a007-5e75244bcb41",
        });
    }

};
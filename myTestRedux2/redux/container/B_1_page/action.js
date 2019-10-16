import {REDUX_ACTION_TYPE} from "../../action/redux_action"

const B1_PAGE_ACTION = {
    fetchData: (data)=> ({type:REDUX_ACTION_TYPE.B1_PAGE_GET_DATA,payload:data}),
    fetchData_fail: (error)=>({type: REDUX_ACTION_TYPE.B1_PAGE_GET_DATA_ERROR,error: error})
}

// fetchList = () => {
//     return dispatch => {
//         return fetch("https://data.ntpc.gov.tw/od/data/api/28AB4122-60E1-4065-98E5-ABCCB69AACA6?$format=json")
//         .then(res=>{
//             return res.json();
//         })
//         .then(data=>{
//             dispatch(B1_PAGE_ACTION.fetchData(data));
//         })
//     }
// }
fetchList =  () => {
    return async (dispatch) => {
        try{
            let url = "https://data.ntpc.gov.tw/od/data/api/28AB4122-60E1-4065-98E5-ABCCB69AACA6?$format=json";
            let response = await fetch(url,{method:"GET"});
            let responseJSON = await response.json();
            if(response.status == 200){
                dispatch(B1_PAGE_ACTION.fetchData(responseJSON))
                // return responseJSON;
            }
        }catch(err){
            dispatch(B1_PAGE_ACTION.fetchData_fail(err.message))
            console.log(typeof err);
            console.log(err.message);
            // return 
        }
    }
}



module.exports = {
    B1_PAGE_ACTION: B1_PAGE_ACTION,
    fetchList: fetchList,
}
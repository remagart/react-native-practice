import {REDUX_ACTION_TYPE} from "../../action/redux_action"

const B1_PAGE_ACTION = {
    fetchData: (data)=> ({type:REDUX_ACTION_TYPE.B1_PAGE_GET_DATA,payload:data})
}

fetchList = () => {
    return dispatch => {
        return fetch("https://data.ntpc.gov.tw/od/data/api/28AB4122-60E1-4065-98E5-ABCCB69AACA6?$format=json")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            dispatch(B1_PAGE_ACTION.fetchData(data));
        })
    }
}

module.exports = {
    B1_PAGE_ACTION: B1_PAGE_ACTION,
    fetchList: fetchList,
}
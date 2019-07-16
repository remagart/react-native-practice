export function getProductList(data){
    return {
        type: "GETPRODUCTLIST",
        payload: data
    }
}

export function fetchProductList(){
    return dispatch => {
        return fetch("https://data.ntpc.gov.tw/od/data/api/28AB4122-60E1-4065-98E5-ABCCB69AACA6?$format=json")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            dispatch(getProductList(data));
        })
    }
}
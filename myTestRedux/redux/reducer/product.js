let initState = {lists:[] };

export const product = (state=initState,action) => {
    switch(action.type){
        case "GETPRODUCTLIST":
            return {...state,lists: action.payload}
        default:
            return state;
    };
}
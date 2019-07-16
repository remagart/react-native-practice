export const mycounter = (state = {counter:50,counter1:10},action) =>{
    switch(action.type){
      case "INCREASE":
        // return {counter: state.counter + 1};
        // return Object.assign({},state,{counter: state.counter + 1});
        return {...state,counter: state.counter + 1}
      case "DECREASE":
        // return {counter1:state.counter1 - 1};
        // return Object.assign({},state,{counter1: state.counter1 - 1});
        return {...state,counter1: state.counter1 - 1}
      default:
        return state;
    }
  };
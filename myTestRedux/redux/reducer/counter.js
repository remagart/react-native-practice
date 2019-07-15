export const mycounter = (state = {counter:50},action) =>{
    switch(action.type){
      case "INCREASE":
        return {counter: state.counter + 1};
      default:
        return state;
    }
  };
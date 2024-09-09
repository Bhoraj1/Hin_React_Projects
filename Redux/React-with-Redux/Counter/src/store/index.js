import {createStore} from "redux";

const INITIALA_VALUE = {
  count:0,
  privacy: false
}

const CounterReducer = (store = INITIALA_VALUE,action) =>{
  if(action.type === "INCREMENT"){
    return {...store,count:store.count + 1}
  }else if(action.type === "DECREMENT"){
    return {...store,count: store.count > 0 ? store.count -1: 0}
  } else if(action.type === "ADD"){
    return {...store,count:store.count + action.payload.num}
  }else if(action.type === "SUBTRACT"){
    return {...store,count: store.count - action.payload.num}
  }else if(action.type === "PRIVACY_TOGGLE"){
    return {...store, privacy: !store.privacy}
  }
  return store;
}

const CounterStore = createStore(CounterReducer);

export default CounterStore;
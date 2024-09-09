import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState:{
    fetchDone:false, //false:pending and true:Done 
    curentlyfetching:false,
  },
  reducers: {
     markFetchDone: (state) =>{
       state.fetchDone = true;
     },
     markFetchingStarted: (state) =>{
       state.curentlyfetching = true;
     },
     markFetchingFinished: (state) =>{
       state.curentlyfetching = false;
     }
  }
})
export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
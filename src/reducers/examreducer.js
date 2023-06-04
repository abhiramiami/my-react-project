import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoaudiostate: { videoenabled: false, audioenabled: false },
  auth_details: {},
  loading: false,
};

const Examreducer = createSlice({
  name: "EXAM",
  initialState,
  reducers: { 
    handleAudio:(state,action)=>{
      state.videoaudiostate={...state.videoaudiostate,audioenabled:!state.videoaudiostate.audioenabled}
    },handleVideo:(state,action)=>{
      state.videoaudiostate={...state.videoaudiostate,videoenabled:!state.videoaudiostate.videoenabled}
    }
  },
});

export const { handleAudio,handleVideo} = Examreducer.actions;
export default Examreducer.reducer;

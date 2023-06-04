import  React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAudio, handleVideo } from "../../reducers/examreducer";
function Videoaudio({ functionClick}){
    const dispatch=useDispatch()
    const { videoaudiostate}=useSelector(state=>state.EXAM)
 const enableAudio=()=>{
dispatch(handleAudio())
 }  
 const enableVideo=()=>{
dispatch(handleVideo())
 }
 function handleExam(enable){if(enable==true){
    functionClick()
 }else{console.log("you eneed to enable video")}}
 console.log("  state",videoaudiostate)
        return (
            <div>
              <nav>{/* Include your navigation bar here */}</nav>
              <h1 className="ep">Exam Portal</h1>
              <button className="bt1" onClick={()=>{handleExam(videoaudiostate.videoenabled)}}>
                Start Exam
              </button>
              <div className="av">
                <div className="audio">
                  <label>
                    <input
                      type="checkbox"
                      checked={videoaudiostate.audioenabled}
                      onChange={enableAudio}
                    />
                    Enable Audio
                  </label>
                </div>
                <div className="video">
                  <label>
                    <input
                      type="checkbox"
                      checked={videoaudiostate.videoenabled}
                      onChange={enableVideo}
                    />
                    Enable Video
                  </label>
                </div>
              </div>
            </div>
          );
        }
      
    export default Videoaudio;

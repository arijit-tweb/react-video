import React, { useRef } from 'react'
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player/youtube';



const Video = () => {
    // const opts = {
    //     height: '390',
    //     width: '640',
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 1,
    //     },
    //     host: 'https://www.youtube.com' 
    //   };
    //   const  onReady_ = (event)=>{
    //     event.target.playVideo();
    //   }
    //   const params = 'https://www.youtube.com/watch?v=eMvGmIkmF7Y'.split('?')[1];
    //   const videoQuery = new URLSearchParams(params);
    //   const vidId = videoQuery.get('v');
    
    const inside = useRef();
    const outside = useRef();
    const reactVideoPlayer = useRef();
    const outsideClicked = (e)=>{
      // console.log(e.nativeEvent.offsetX);
      // console.log(e.clientX  - outside.current.getBoundingClientRect().left);
      // console.log(outside.current.offsetWidth)
      let dVal = ((e.clientX  - outside.current.getBoundingClientRect().left) / outside.current.offsetWidth);
      let percentage = Math.floor(dVal * 100);
      console.log(percentage);
      inside.current.style.width = `${percentage}%`;
     
    };

    const vidStart = ()=>{
      console.log('vidStart');
    };

    const vidReady = ()=>{
        console.log('vidReady');
    }
  return (
   <>
      {/* <div> */}
        {/* HIII
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fV5NzrTmqZM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        {/* <YouTube videoId='fV5NzrTmqZM' opts={opts} onReady={onReady_}/> */}
      {/* </div> */}
      <ReactPlayer 
      url='https://www.youtube.com/watch?v=XClRgoFLlM4'
      onStart={()=> vidStart()}
      onReady={()=> vidReady()}
      controls
      ref={reactVideoPlayer}
      />
      <div>
        <div className="outside" ref={outside} onClick={(e)=>outsideClicked(e)}>
          <div className="inside" ref={inside}></div>
        </div>
      </div>
   </>
  )
}

export default Video
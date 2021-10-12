import './App.css';
import React, { useState, useRef } from 'react'

function App() {
  function stopVideo() {
    setDisplayOption("none");
    vidRef.current.pause();
  }
function playVideo(file) {
    setFileName(file);
    setDisplayOption('block');
}

  const [displayOption,setDisplayOption] = useState('none');
  const [fileName, setFileName] = useState('');
  const vidRef = useRef(null);


  return (
    <div className="app">
    <div className="container">
        <h1>Video Gallery</h1>
        <div className="row">
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/0REvHOemNDQ/maxresdefault.jpg" width="100%" />
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v1.mp4')} />
                </div>
            </div>
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/PVGlpbxxPj0/maxresdefault.jpg" width="100%" />
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v2.mp4')} />
                </div>
            </div>
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/FmvGO_x6muA/maxresdefault.jpg" width="100%" />
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v3.mp4')} />
                </div>
            </div>
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/ZxiETzt9icM/maxresdefault.jpg" width="100%" />
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v4.mp4')} />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/dCmp56tSSmA/maxresdefault.jpg" width="100%" />
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v5.mp4')} />
                </div>
            </div>
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/HB33Ph9Y0fw/maxresdefault.jpg" width="100%" />
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v6.mp4')} />
                </div>
            </div>
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/ZqpCJFUFv98/maxresdefault.jpg" width="100%" />
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v7.mp4')} />
                </div>
            </div>
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/3oOGF8P1BJo/maxresdefault.jpg" width="100%" />
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v8.mp4')} />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/RKioDWlajvo/maxresdefault.jpg" width="100%" />
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v9.mp4')} />
                </div>
            </div>
            <div className="col">
                <div className="feature-img">
                    <img src="https://i.ytimg.com/vi/VNs_cCtdbPc/maxresdefault.jpg" width="100%"></img>
                    <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('media/v10.mp4')} />
                </div>
            </div>
        </div>
    </div>
    <div className="video-player" style={{display:`${displayOption}`}}>
        <video ref={vidRef} width="100%" controls autoplay id="myVideo" src={fileName} type="video/mp4">
        </video>
        <img src="https://www.seekpng.com/png/full/155-1554393_go-back-icon-blue-close-icon-png.png" className="close-btn" onClick={(e)=>stopVideo()} />
    </div>
    </div>
  );
}

export default App;

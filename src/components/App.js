import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import useVideos from "../hooks/useVideos";

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [ videos, search ] = useVideos("forests");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])
  
  return (
    <div className="container mt-5">
      <div className="container">
        <SearchBar onSearchSubmit={search} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="col-4">
            <VideoList videos={videos} onVideoSelect={(video) => setSelectedVideo(video)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

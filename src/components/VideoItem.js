import React from 'react';
import "../styles/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item container d-flex align-items-center mb-2" onClick={() => onVideoSelect(video)}>
            <img alt={video.snippet.description} className="mr-2" src={video.snippet.thumbnails.default.url} />
            <p>{video.snippet.title}</p>
        </div>
    )
};

export default VideoItem;
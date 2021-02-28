import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const List = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>
    })
    return (
        <div>
        {List}
        </div>
    )
};

export default VideoList;
import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
    
    if (!selectedVideo) {
        return <div>Loading...</div>
    }

    const url = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

    return (
        <div className="container mt-2">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={selectedVideo.id.title} className="embed-responsive-item" src={url} allowFullScreen></iframe>
            </div>
            <div>
                <h5>{selectedVideo.snippet.title}</h5>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
};

export default VideoDetail;

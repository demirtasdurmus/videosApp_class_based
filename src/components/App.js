import React from 'react';
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    })
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     })
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  componentDidMount () {
    this.onTermSubmit("universe");
  }

  render() {
    return (
      <div className="container mt-5">
      <div className="container">
      <SearchBar onSearchSubmit={this.onTermSubmit} />
      </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="col-4">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

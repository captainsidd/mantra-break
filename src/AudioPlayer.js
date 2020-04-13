import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Container from 'react-bootstrap/Container';
import 'react-h5-audio-player/lib/styles.css';
import YAML from 'yamljs';

import player from './large/player_buttons.png'

const FILES_YAML = "https://iskconnyc.nyc3.cdn.digitaloceanspaces.com/files.yaml"

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      currentMusicIndex: 0
    };
  }

  componentDidMount() {
    fetch(FILES_YAML, {
      mode: 'cors'
    }).then((response) => {
      return response.text();
    }).then((data) => {
      this.convertTrackFileToPlaylist(YAML.parse(data));
    });
  }

  convertTrackFileToPlaylist = (tracks) => {
    let newPlaylist = [];
    tracks['tracks'].forEach(track => {
      let newTrack = {}
      newTrack['name'] = track['track']['name'];
      newTrack['artist'] = track['track']['artist'];
      newTrack['date'] = track['track']['date'];
      newTrack['src'] = track['track']['url'];
      newPlaylist.push(newTrack);
    });

    // @TODO shuffle playlist

    this.setState({
      playlist: newPlaylist
    });
  }

  handleClickPrevious = () => {
    let newIndex = this.state.currentMusicIndex - 1;
    if (newIndex < 0) {
      newIndex = this.state.playlist.length - 1;
    }
    this.setState({
      currentMusicIndex: newIndex
    });
  }

  handleClickNext = () => {
    let newIndex = this.state.currentMusicIndex + 1;
    if (newIndex >= this.state.playlist.length) {
      newIndex = 0;
    }
    this.setState({
      currentMusicIndex: newIndex
    });
  }

  render() {
    let srcUrl = "";
    if (this.state.playlist.length !== 0) {
      srcUrl = this.state.playlist[this.state.currentMusicIndex].src
    }

    return (
      <Container>
        <img className="player-buttons" src={player} alt=""></img>
        <AudioPlayer
          className="audio-player"
          showSkipControls={true}
          showJumpControls={false}
          autoPlayAfterSrcChange={true}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
          onEnded={this.handleClickNext}
          src={srcUrl}
          style={{
            width: '60%'
          }}
        />
      </Container>
    )
  }
}

export default Player;

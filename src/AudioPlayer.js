import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './player.css';
import YAML from 'yamljs';
import Row from 'react-bootstrap/Row';

import largePlayer from './large/player_buttons.png'
import medPlayer from './med/player_buttons.png'
import smallPlayer from './small/player.png'
import Media from 'react-media';

const FILES_YAML = "https://iskconnyc.nyc3.cdn.digitaloceanspaces.com/files.yaml"


function getArtistCredit(track) {
  if (track.location === "Radhadesh Mellows") {
    return (
      <div className="artist-credit">
        Kirtan Led By {track.artist} | <a href={track.homepage}>Radhadesh Mellows</a>
      </div>
    )
  }
  if (track.homepage && track.homepage.startsWith("https://www.youtube.com")){
    return (
      <div className="artist-credit">
        Kirtan Led By {track.artist} | <a href={track.homepage}>YouTube</a>
      </div>
    )
  }
  return (
    <div className="artist-credit">
      Kirtan Led By {track.artist}
    </div>
  )
}

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
      newTrack['location'] = track['track']['location'];
      newTrack['homepage'] = track['track']['homepage'];
      newPlaylist.push(newTrack);
    });
    this.shuffle(newPlaylist);

    this.setState({
      playlist: newPlaylist
    });
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
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
    let artistCredit = ""
    if (this.state.playlist.length !== 0) {
      srcUrl = this.state.playlist[this.state.currentMusicIndex].src
      artistCredit = getArtistCredit(this.state.playlist[this.state.currentMusicIndex])
    }

    return (
        <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
        }}>
          {matches => (
            <div>
              {matches.large &&
                <div>
                  <img className="player-buttons" src={largePlayer} alt=""></img>
                  <div>
                    <a href="https://www.facebook.com/brooklynlotus" className="link-left">&nbsp;</a>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/iskconnyc" className="link-right">&nbsp;</a>
                  </div>
                  <Row>
                    <AudioPlayer
                      className="audio-player"
                      showSkipControls={true}
                      showJumpControls={false}
                      autoPlayAfterSrcChange={true}
                      header={artistCredit}
                      onClickPrevious={this.handleClickPrevious}
                      onClickNext={this.handleClickNext}
                      onEnded={this.handleClickNext}
                      src={srcUrl}
                      style={{
                        width: "60%",
                        height: "auto",
                      }}
                    />
                  </Row>

                </div>
              }
              {matches.medium &&
                <div>
                  <img className="player-buttons" src={medPlayer} alt=""></img>
                  <div>
                    <a href="https://www.facebook.com/brooklynlotus" className="link-left">&nbsp;</a>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/iskconnyc" className="link-right">&nbsp;</a>
                  </div>
                  <AudioPlayer
                    className="audio-player"
                    showSkipControls={true}
                    showJumpControls={false}
                    autoPlayAfterSrcChange={true}
                    header={artistCredit}
                    onClickPrevious={this.handleClickPrevious}
                    onClickNext={this.handleClickNext}
                    onEnded={this.handleClickNext}
                    src={srcUrl}
                    style={{
                      width: "50%",
                      height: "auto",
                    }}
                  />
                </div>
              }
              {matches.small &&
                <div>
                  <img className="player-buttons" src={smallPlayer} alt=""></img>
                  <AudioPlayer
                    className="audio-player"
                    showSkipControls={true}
                    showJumpControls={false}
                    autoPlayAfterSrcChange={true}
                    header={artistCredit}
                    onClickPrevious={this.handleClickPrevious}
                    onClickNext={this.handleClickNext}
                    onEnded={this.handleClickNext}
                    src={srcUrl}
                    style={{
                      width: "60%",
                      height: "auto",
                    }}
                  />
                </div>
              }
            </div>
          )}
        </Media>
    )
  }
}

export default Player;

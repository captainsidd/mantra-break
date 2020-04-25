import React from 'react';
import logo from './large/logo.png'
import Media from 'react-media';

class LeftIcons extends React.Component {

  render() {
    return <div>
      <Media queries={{
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.large && <img className="logo" src={logo} alt="mantra break logo"></img>}
          </div>
        )}
      </Media>
    </div>
  }
}

export default LeftIcons;

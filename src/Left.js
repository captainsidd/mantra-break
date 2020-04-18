import React from 'react';
import largeIcons from './large/left_icons.png'
import midIcons from './med/left_icons.png'
import smallIcons from './small/left_icons.png'
import Media from 'react-media';

class LeftIcons extends React.Component {

  render() {
    return <div>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.small && <img className="icons-left" src={smallIcons} alt=""></img>}
            {matches.medium && <img className="icons-left" src={midIcons} alt=""></img>}
            {matches.large && <img className="icons-left" src={largeIcons} alt=""></img>}
          </div>
        )}
        </Media>
    </div>
  }
}

export default LeftIcons;

import React from 'react';
import largeIcons from './large/right_icons.png'
import midIcons from './med/right_icons.png'
import smallIcons from './small/right_icons.png'
import Media from 'react-media';

class RightIcons extends React.Component {

  render() {
    return <div>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.small && <img className="icons-right" src={smallIcons} alt=""></img>}
            {matches.medium && <img className="icons-right" src={midIcons} alt=""></img>}
            {matches.large && <img className="icons-right" src={largeIcons} alt=""></img>}
          </div>
        )}
      </Media>
    </div>
  }
}

export default RightIcons;

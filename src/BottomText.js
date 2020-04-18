import React from 'react';
import largeText from './large/bottom_text.png'
import midText from './med/bottom_text.png'
import smallText from './small/bottom_text.png'
import Media from 'react-media';

class BottomText extends React.Component {

  render() {
    return <div>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.small && <img className="text-btm" src={smallText} alt=""></img>}
            {matches.medium && <img className="text-btm" src={midText} alt=""></img>}
            {matches.large && <img className="text-btm" src={largeText} alt=""></img>}
          </div>
        )}
      </Media>
    </div>
  }
}

export default BottomText;

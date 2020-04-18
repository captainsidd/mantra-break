import React from 'react';
// import largeText from './large/top_text.png'
import largeText from './large/top_text_alt.png'
import midText from './med/top_text.png'
import smallText from './small/top_text.png'
import Media from 'react-media';

class TopText extends React.Component {

  render() {
    return <div>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.small && <img className="text-top" src={smallText} alt=""></img>}
            {matches.medium && <img className="text-top" src={midText} alt=""></img>}
            {matches.large && <img className="text-top" src={largeText} alt=""></img>}
          </div>
        )}
      </Media>
    </div>
  }
}

export default TopText;

import React from 'react';
import largeFtr from './large/footer_text.png'
import Media from 'react-media';

class FooterText extends React.Component {

  render() {
    return <div>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.large && <img className="text-ftr" src={largeFtr} alt=""></img>}
            {matches.medium && <img className="text-ftr" src={largeFtr} alt=""></img>}
            {matches.small && <img className="text-ftr" src={largeFtr} alt=""></img>}
          </div>
        )}
      </Media>
    </div>
  }
}

export default FooterText;

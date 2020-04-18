import React from 'react';
import Media from 'react-media';
import button from './small/player_buttons.png'

class Buttons extends React.Component {

  render() {
    return <div>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.small && <img className="buttons" src={button} alt=""></img>}
            {matches.medium && <img className="buttons" src={button} alt=""></img>}
          </div>
        )}
      </Media>
    </div>
  }
}

export default Buttons;

import React from 'react';
import text from './large/top_text.png'

class TopText extends React.Component {

  render() {
    return <div>
      <img className="text-top" src={text} alt=""></img>
    </div>
  }
}

export default TopText;

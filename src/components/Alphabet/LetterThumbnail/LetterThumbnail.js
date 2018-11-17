import React, { Component } from 'react';

import style from './LetterThumbnail.module.css';

class Thumbnail extends Component {
  state = {
    flipped: false
  }

  flipHandler = () => {
    this.setState(
      (prevState) => ({flipped: !prevState.flipped})
    );
  }

  render () {
    const classes = [style.CardInner, this.state.flipped? style.Flipped: null];

    return (
      <div className={ style.Card }  onClick={this.flipHandler} >
        <div className={ classes.join(' ') }>
          <div className={ style.CardFront }>
            { this.props.letter }
          </div>

          <div className={ style.CardBack }>
            <div className={ style.CardDetails } onClick={ this.props.clicked }>
              { this.props.reading }
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Thumbnail;

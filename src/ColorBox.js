import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
        {this.rerender(this.props.opacity - 0.1)}
      </div>
    )

  }
  rerender(opacity){
    if (opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: opacity}}>
          {this.rerender(opacity - 0.1)}
        </div>
      )
    } else {
      return null
    }
  }

}

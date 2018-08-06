import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.rerender(this.props.opacity - 0.1)}
      </div>
    )

  }
  rerender(opacity){
    if (opacity >= 0.1) {
      return (
        <div className="color-box" style={{opacity: opacity}}>
          {this.rerender((Math.round((opacity - 0.1) * 10)) / 10)}
        </div>
      )
    } else {
      return null
    }
  }

}

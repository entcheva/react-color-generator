import React, { Component } from 'react';

const styles = {
  color: '#b6b6b6',
  display: 'inline-block',
  fontFamily: 'monospace',
  fontSize: '24px',
  margin: '20px 25%',
  textAlign: 'center',
  width: '50%',
}


export default class ColorChangeButton extends Component {

  render() {
    const { changeColor, text } = this.props;
    // const changeColor = this.props.changeColor
    return (
      <button onClick={changeColor} style={{ ...styles }}>{ text }</button>
    );
  }
}

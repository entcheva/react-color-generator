import React, { Component } from 'react';
import ColorBox from './ColorBox';
import HexText from './HexText';
import ColorChangeButton from './ColorChangeButton';

const styles = {
	border: '2px dashed #d5d5d5',
	height: '300px',
	width: '400px',
	margin: '0 auto',
}

const listOfHexs = [
	'#197eae',
	'#0cb833',
	'#5c3efd',
	'#f5319f',
	'#2a7020',
	'#7bc495',
	'#ccfd32',
	'#656d8b',
	'#3bea5a',
	'#b33544',
	'#ff07f8',
	'#2b23e7',
	'#e8934b',
]


const getRandomHex = (arr) => {
  return arr[Math.floor( Math.random() * arr.length )];
}


export default class MamaContainer extends Component {
  constructor(props) {
  	super(props);
  	this.state = { currentColor: getRandomHex(listOfHexs)}
  }

  changeColor() {
  	this.setState({ currentColor: getRandomHex(listOfHexs) })
  }

  render() {
    return (
      <div styles ={{ ...styles }}>
        <ColorBox color={this.state.currentColor} />
        <HexText text={this.state.currentColor} />
        <ColorChangeButton text = {this.state.currentColor} changeColor={this.changeColor.bind(this)}/>
      </div>
    );
  }
}

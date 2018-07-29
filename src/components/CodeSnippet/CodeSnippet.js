import React, { Component } from 'react'
import Highlight from 'react-highlight'
import styled, { keyframes } from 'styled-components'
import { Round, Button } from '../GlobalStyles'
import Close from '@material-ui/icons/Close'
import '../../../node_modules/highlight.js/styles/ocean.css'

const xfade = keyframes`

 0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }

`

const Wrapper = styled.div`
	position: absolute;
	top: 90px;
	right: 0;
	padding: 0 25px 25px;
	background: #2b303b;
	animation: ${xfade} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
		0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`

const CloseButton = Round.extend`
	position: absolute;
	top: -20px;
	margin: 0;
	left: -20px;
`

const Copy = Button.extend`
	display: block;
	margin-left: auto;
`

class CodeSnippet extends Component {
	state = {
		isCopied: false
	}

	handleClick = () => this.setState({ isCopied: true })

	render() {
		const { color, size, geometrye, isAnimated, isWireframe, close } = this.props
		return (
			<Wrapper>
				<CloseButton red onClick={close}>
					<Close />
				</CloseButton>
				<Highlight language="javascript">
					{`
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 2000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();`}
				</Highlight>
				<Copy onClick={this.handleClick}>{this.state.isCopied ? 'Copied' : 'Copy'}</Copy>
			</Wrapper>
		)
	}
}

export default CodeSnippet

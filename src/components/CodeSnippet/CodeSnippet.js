import React, { Component } from 'react'
import Highlight from 'react-highlight'
import styled, { keyframes } from 'styled-components'
import { Round } from '../GlobalStyles'
import Close from '@material-ui/icons/Close'
import '../../../node_modules/highlight.js/styles/ocean.css'
const CodeSnippet = ({ color, size, geometrye, isAnimated, isWireframe, close }) => {
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
		bottom: 0;
		right: 0;
		padding: 0 25px;
		background: #2b303b;
		animation: ${xfade} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	`

	const CloseButton = Round.extend`
		position: absolute;
		top: -20px;
		margin: 0;
		left: -20px;
		background: #912F56;
		&:hover {
			background: #cc5a71;
	`

	return (
		<Wrapper>
			<CloseButton onClick={close}>
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
		</Wrapper>
	)
}

export default CodeSnippet

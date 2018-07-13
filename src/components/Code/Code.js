import React, { Component } from 'react'
import Highlight from 'react-highlight'
import styled from 'styled-components'

import '../../../node_modules/highlight.js/styles/ocean.css'
const Code = ({ color, size, geometrye, isAnimated, isWireframe, close }) => {
	// getGeometry = () => {
	// 	return geometry
	// }

	// getMaterial = () => {
	// 	return meaterial
	// }

	const Wrapper = styled.div`
		position: absolute;
		bottom: 0;
		right: 15px;
	`

	return (
		<Wrapper>
			<button onClick={() => close()}>close</button>
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

export default Code

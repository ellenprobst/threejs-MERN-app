import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import ReactDOM from 'react-dom'

const styles = {
	background: ' #ec008c',
	background: '-webkit-linear-gradient(to bottom, #fc6767, #ec008c)',
	background: 'linear-gradient(to bottom, #fc6767, #ec008c)'
}
class Canvas extends React.Component {
	constructor(props, context) {
		super(props, context)

		// construct the position vector here, because if we use 'new' within render,
		// React will think that things have changed when they have not.
		this.cameraPosition = new THREE.Vector3(0, 0, 5)

		this.state = {
			cubeRotation: new THREE.Euler()
		}

		this._onAnimate = () => {
			// we will get this callback every frame
			// pretend cubeRotation is immutable.
			// this helps with updates and pure rendering.
			// React will be sure that the rotation has now updated.
			this.setState({
				cubeRotation: new THREE.Euler(this.state.cubeRotation.x + 0.003, this.state.cubeRotation.y + 0.003, 0)
			})
		}
	}

	render() {
		const width = window.innerWidth // canvas width
		const height = window.innerHeight // canvas height

		return (
			<React3
				preserveDrawingBuffer={true}
				clearAlpha={0}
				alpha={true}
				mainCamera="camera"
				width={
					width // this points to the perspectiveCamera which has the name set to "camera" below
				}
				height={height}
				onAnimate={this._onAnimate}
				canvasStyle={styles}
			>
				<scene>
					<perspectiveCamera
						name="camera"
						fov={75}
						aspect={width / height}
						near={0.1}
						far={1000}
						position={this.cameraPosition}
					/>
					<mesh rotation={this.state.cubeRotation}>
						<boxGeometry width={this.props.size} height={this.props.size} depth={this.props.size} />
						<meshPhongMaterial color={this.props.color} wireframe={this.props.isWireframe} />
					</mesh>
				</scene>
			</React3>
		)
	}
}

export default Canvas

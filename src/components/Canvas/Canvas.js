import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

// const styles = {
// 	background: '-webkit-linear-gradient(to bottom, #fc6767, #ec008c)',
// 	background: 'linear-gradient(to bottom, #fc6767, #ec008c)'
// }

class Canvas extends React.Component {
	constructor(props, context) {
		super(props, context)

		// construct the position vector here, because if we use 'new' within render,
		// React will think that things have changed when they have not.
		this.cameraPosition = new THREE.Vector3(0, 0, 10)
		this.directionalLightPositionOne = new THREE.Vector3(-0.75, -1, 0.5)
		this.directionalLightPositionTwo = new THREE.Vector3(1, 1, 0)
		this.directionalLightPositionFix = new THREE.Vector3(3, 0, -2)

		this.scenePosition = new THREE.Vector3(0, 0, 0)

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

	generateMesh = geometry => {
		let newGeometry = ''
		switch (geometry) {
			case 'sphere':
				newGeometry = <sphereGeometry radius={this.props.size} />
				break
			case 'cube':
				newGeometry = <boxGeometry width={this.props.size} height={this.props.size} depth={this.props.size} />
				break
			case 'torus':
				newGeometry = <torusGeometry radius={this.props.size * 30} />
				break
			case 'torusKnot':
				newGeometry = <torusKnotGeometry radius={this.props.size * 30} />
				break

			case 'icosa':
				newGeometry = <icosahedronGeometry radius={this.props.size} detail={1} />
				break
			case 'octa':
				newGeometry = <octahedronGeometry radius={this.props.size} detail={1} />
				break
		}
		return newGeometry
	}

	render() {
		if (geometry === null) return

		const { color, geometry } = this.props
		const width = window.innerWidth // canvas width
		const height = window.innerHeight // canvas height

		const styles = {
			background: `linear-gradient(to bottom, ${color[0]}, ${color[1]})`
		}

		const getGeometry = this.generateMesh(geometry)
		const getScale = () => {
			if (geometry === 'torus') {
				return new THREE.Vector3(0.03, 0.03, 0.03)
			} else if (geometry === 'torusKnot') {
				return new THREE.Vector3(0.03, 0.03, 0.03)
			} else {
				return new THREE.Vector3(1, 1, 1)
			}
		}

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
						near={1}
						far={2000}
						lookAt={this.scenePosition}
						position={this.cameraPosition}
					/>
					<ambientLight color={'#999999'} />
					<directionalLight color={color[1]} position={this.directionalLightPositionOne} lookAt={this.scenePosition} />
					<directionalLight color={color[0]} position={this.directionalLightPositionTwo} lookAt={this.scenePosition} />
					<directionalLight color={'#fc6767'} position={this.directionalLightPositionFix} lookAt={this.scenePosition} />
					<mesh rotation={this.state.cubeRotation} scale={getScale()}>
						{getGeometry}
						<meshPhongMaterial
							side={THREE.DoubleSide}
							wireframe={this.props.isWireframe}
							shading={this.props.isWireframe ? '' : THREE.FlatShading}
						/>
					</mesh>
				</scene>
			</React3>
		)
	}
}

export default Canvas

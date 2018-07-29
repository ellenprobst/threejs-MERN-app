import styled, { css, keyframes } from 'styled-components'
import { Round, Button } from '../GlobalStyles'

const slide = keyframes`
	0% {
		-webkit-transform: translateX(-200%);
						transform: translateX(-200%);
	}
	100% {
		-webkit-transform: translateX(0px);
						transform: translateX(0px);
	}
`

export const Container = styled.div`
	min-height: calc(100vh - 85px);
`

export const Title = styled.h1`
	font-size: 60px;
	font-weight: normal;
	font-family: 'Raleway', sans-serif;
`
export const CodeButton = Round.extend`
	position: absolute;
	bottom: 5%;
	right: 2%;
`

export const Wrapper = styled.div`
	position: absolute;
	bottom: 25vh;
	left: 15%;
	display: inline-block;
	pointer-events: none;
`

export const NewButton = Button.extend`
	position: relative;
	width: 180px;
	animation: ${slide} 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both 0.5s;
`

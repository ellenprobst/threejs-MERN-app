import styled, { css, keyframes } from 'styled-components'
import { Round } from '../GlobalStyles'

const xfade = keyframes`

  from {
    transform: scale(1);
  }

  to {
    transform: scale(0);
   
  }

`

export const Label = styled.label`
	display: ${props => (props.active ? 'block' : 'none')};
	animation: ${props => (props.hide ? `${xfade} .3s both cubic-bezier(1,0,1,-0.21)` : 'none')};
`

export const Form = styled.form`
	padding-top: 50px;
	position: relative;
	left: -15px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const FormButton = Round.extend`
	animation: ${props => (props.hide ? `${xfade} .3s both cubic-bezier(1,0,1,-0.21)` : 'none')};
	position: relative;
`

export const Toggle = styled.div`
display flex;
justify-content: center;
align-items:center;
	outline: none;
	margin: 10px;
	border: none;
	background: transparent;
	background-color: ${props => (props.checked ? '#FFF' : '#233b55')};
	color: ${props => (props.checked ? '#FFF' : '#233b55')};
	
	width: 48px;
	height: 48px;
	padding: 0;
	min-width: 0;
	box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
		0px 1px 18px 0px rgba(0, 0, 0, 0.12);
	border-radius: 50%;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
	
		box-shadow: 0 5px 28px rgba(0, 0, 0, 0.25), 0 5px 10px rgba(0, 0, 0, 0.22);
	}
`

export const Container = styled.div`
	display: flex;
	align-items: center;
`

export const Geometries = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	left: 80px;
`

export const Tooltip = styled.span`
	visibility: hidden;
	position: absolute;

	right: -81px;
	width: 80px;
	background-color: #3ec9bb;
	color: #fff;
	text-align: center;
	padding: 5px 0;
	border-radius: 3px;
	z-index: 1;
	opacity: 0;
	box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
		0px 1px 18px 0px rgba(0, 0, 0, 0.12);
	transition: opacity 0.6s;
	${FormButton}:hover & {
		visibility: visible;
		opacity: 1;
	}

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		right: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent #3ec9bb transparent transparent;
	}
`

import styled, { css, keyframes } from 'styled-components'

const scale = keyframes`
  
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }

`

export const Container = styled.div`
	border-radius: 3px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	position: absolute;
	z-index: 3;
	right: 0;
	left: 0;
	margin: auto;
	max-width: 380px;
	min-height: 50%;
	background: #141f30;
	display: flex;
	flex-direction: column;
	animation: ${scale} 0.3s both ease-in;
`

export const Form = styled.form`
	padding: 40px;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: space-evenly;
`

export const SelectionGroup = styled.div`
	display: flex;
`

export const Selection = styled.button`
	outline: none;
	font-size: 16px;
	letter-spacing: 1.6px;
	padding: 30px;
	background: #19293d;
	color: #677996;
	border: none;
	flex-grow: 1;

	${props =>
		props.active &&
		`

      background: transparent;
      color: #59F8E8;
    `};
`

export const SubHeader = styled.p`
	font-size: 12px;
	letter-spacing: 1.2px;
	color: #677998;
	text-align: center;
	margin: 0 0 20px;
`

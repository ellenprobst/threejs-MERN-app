import styled, { css, keyframes } from 'styled-components'

const sizes = {
	desktop: 992,

	tablet: 768,

	phone: 576
}

// Iterate through the sizes and create a media template

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)};
		}
	`

	return acc
}, {})

// const primaryColor = ''

// const accentColor = '#59f8e8'

//const accentColor = '#CC5A71'

export const Input = styled.input`
	padding: 10px;
	margin-bottom: 15px;
	color: #fff;
	font-size: 18px;
	background: transparent;
	border: none;
	border-bottom: 1px solid #19293d;
	outline: none;
	transition: all 0.3s ease;
	letter-spacing: 1.6px;
	&:focus {
		border-bottom: 1px solid #59f8e8;
	}
	&:-webkit-autofill {
		background-color: transparent;
	}
	&::-webkit-input-placeholder {
		color: #677996;
	}
`

export const Button = styled.button`
	outline: none;
	flex-grow: ${props => (props.small ? '0' : '1')};
	font-size: ${props => (props.small ? '14px' : '16px')};
	letter-spacing: ${props => (props.small ? '1.4px' : '1.6px')};
	padding: 15px 30px;
	margin-top: 25px;
	color: ${props => (props.small ? '#677998' : '#fff')};
	border: ${props => (props.small ? 'none' : '1px solid #59f8e8')};
	border-bottom: ${props => (props.small ? '1px solid #677998' : '1px solid #59f8e8')};
	border-radius: ${props => (props.small ? '0px' : '3px')};
	background: ${props => (props.full ? '#59f8e8' : 'transparent')};
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
`

export const Round = styled.button`
	outline: none;
	margin: 10px;
	border: none;
	background: transparent;
	color: #fff;
	background: #060a12;
	width: ${props => (props.small ? '24px' : '56px')};
	height: ${props => (props.small ? '24px' : '56px')};
	padding: 0;
	min-width: 0;
	box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
		0px 1px 18px 0px rgba(0, 0, 0, 0.12);
	border-radius: 50%;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
		background: #233b55;
		box-shadow: 0 5px 28px rgba(0, 0, 0, 0.25), 0 5px 10px rgba(0, 0, 0, 0.22);
	}
`

export const FlexContainer = styled.div`
	display: flex;
`

//#912F56

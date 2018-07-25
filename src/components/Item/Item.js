import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Container = styled.div`
	position: relative;
`

const Title = styled.h1`
	font-size: 16px;
	font-weight: normal;
`

const Wrapper = styled.div`
	background: ${props => `linear-gradient(to bottom, ${props.color[0]}, ${props.color[1]})`};
	padding: 10px;
	border-radius: 3px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
		cursor: pointer;
	}
`

const Image = styled.img`
	display: block;
	max-width: 100%;
	object-fit: fill;
`

const Button = styled.button`
	position: absolute;
	width: 20px;
	height: 20px;
	top: 30px;
	right: -5px;
	border-radius: 50%;
	background: #262a31;
	border: 1px solid white;
	color: white;
	font-weight: bold;
`

const Item = ({ title, image, color, removeItem, id }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Wrapper color={color}>
				<Link to={`/myPage/${id}`} key={id}>
					<Image src={image} />
				</Link>
			</Wrapper>
			<Button onClick={e => removeItem(e, id)}>x</Button>
		</Container>
	)
}

export default Item

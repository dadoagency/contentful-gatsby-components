import React from 'react'
import styled from 'styled-components';
import Img from "gatsby-image"
import Nav from "../Nav/Nav"

const Container = styled.div`
box-shadow: 0 0 6px rgb(0 0 0 / 10%);
position: fixed;
top: 0;
background-color: #fff;
z-index: 999;
width: 100%;
font-family: 'Fira Sans', sans-serif;
font-size: 14px;
height: 90px;
`;

const Row = styled.div`
display:flex;
align-items: center;
min-height: 90px;
max-width: 1310px;
margin-right: auto;
margin-left: auto;
`;

const Col = styled.div`
flex: 0 33.33333333%;
&.logo {
    margin-bottom: 8px;
}
&.center {
    text-align: center;
    font-weight: 100;
}
&.right {
    position: relative;
}
`;

export default ({ logo }) => {
    return (
        <Container>
            <Row>
                <Col><Img className="logo" fixed={logo} /></Col>
                <Col className="center">ADVERTORIAL</Col>  
                <Col className="right"><Nav /></Col>
            </Row>  
        </Container>
    )
}

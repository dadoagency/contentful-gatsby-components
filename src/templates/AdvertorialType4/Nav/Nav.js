import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
position: absolute;
right: 0;
margin-top: -10px;
margin-right: 20px;
`;

const Button = styled.span`
cursor: pointer;
&:hover > span {
    background:#ff815d;
}
`;

const Line = styled.span`
display: block;
width: 25px;
height: 4px;
margin-bottom: 5px;
position: relative;
border-radius: 3px;
z-index: 1;
transform-origin: 4px 0px;
transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
opacity 0.55s ease;
background:#D26546;
`

const Nav = styled.div`
position: absolute;
top: 40px;
right: 0px;
background-color: #F2EAD5;
z-index: 100;
text-align: right;
-moz-box-shadow: -5px 5px 5px rgba(68, 68, 68, 0.3);
-webkit-box-shadow: -5px 5px 5px rgb(68 68 68 / 30%);
box-shadow: -5px 5px 5px rgb(68 68 68 / 30%);
min-width: 220px;
`;
const Link = styled.a`
color: #D26546;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
display: block;
z-index: 200;
border-bottom: 1px solid #cccccc;
&:hover {
    background-color: #ddd;
    color: black;
}
`;

export default () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        console.log(visible);
        setVisible(!visible);
    }
    return (
        <Container>
            <Button onClick={toggleVisible}>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Button>
            {(() => {
                if( visible ) {
                    return (<Nav>
                        <Link onClick={toggleVisible} href="#">Home</Link>
                        <Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/pages/about-us-1">About Us</Link>
                        <Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/collections/bestsellers">Products</Link>
                        <Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/pages/subscription-benefits">Subscription Benefits</Link>
                        <Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/">Contact Us</Link>
                        <Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/pages/testimonials">Testimonials</Link>
                        <Link onClick={toggleVisible} href="#theme2_footer">Disclaimer</Link>
                    </Nav>)
                }
            })()}
        </Container>
    )
}

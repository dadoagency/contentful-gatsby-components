import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
right: 0;
margin-top: -10px;
margin-right: 20px;
`;

export const Button = styled.span`
cursor: pointer;
&:hover > span {
    background:#ff815d;
}
`;

export const Line = styled.span`
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

export const Nav = styled.div`
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
export const Link = styled.a`
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
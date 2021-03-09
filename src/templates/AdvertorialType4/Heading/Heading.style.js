import styled from 'styled-components';

export const Headline = styled.h1`
font-family: 'Pragati Narrow', sans-serif;
font-weight: 600;
font-size: 46px;
line-height: 52px;
margin-bottom: .5rem;
margin-top: 0;
color: #424242;
`
export const Categorization = styled.div`
display: flex;
justify-content: stretch;
align-items: center;
margin-bottom: 15px;
margin-top: 0;
`
export const Title = styled.a`
color: #E26447;
font-weight: 600;
font-size: 16px;
text-transform: uppercase;
text-decoration: none;
&:hover {
    text-decoration: underline;
}
`
export const Line = styled.div`
background: #E26447;
flex: 1 1;
height: 10px;
margin-left: 5px;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
`

export const Author = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Avatar = styled.img`
top: 0px;
left: 0px;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center center;
opacity: 1;
transition: opacity 500ms ease 0s;
width: 46px;
height:46px;
border-radius: 100px;
background-color:#FFF;
padding: 1px;
border: 3px solid rgb(221, 221, 221, 0.5);
margin-right: 10px;
`
export const Meta = styled.div`
font-size: 12px;
line-height: 40px;
text-transform: uppercase;
color: #969696;
flex: 1 1;
font-weight:bold;
`
export const Name = styled.a`
margin: 0 5px;
color: #E26447;
font-weight: 600;
font-size: 16px;
text-transform: uppercase;
text-decoration: none;
&:hover {
    text-decoration: underline;
}
`
export const Date = styled.span``
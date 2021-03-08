import React from 'react'
import styled from 'styled-components';

const Container = styled.div``;
const Row = styled.div`
display:flex;
align-items: center;
min-height: 90px;
max-width: 1310px;
margin-right: auto;
margin-left: auto;
`;
const Col = styled.div``;

export default (props) => {
    console.log("Footer", props);
    return (
        <Container>
            
        </Container>
    )
}

import styled from 'styled-components';

export const Container = styled.div`
    color: #fff !important;
    font-size: 14px !important;
    border-top: 3px solid #E26447;
    background-color: #293F4C !important;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    line-height: 21px;
`;
export const Row = styled.div`
display:flex;
align-items: center;
min-height: 90px;
max-width: 1310px;
margin-right: auto;
margin-left: auto;
`;
export const Col = styled.a`
flex: 0 0 33.333333%;
text-align:center;
font-weight: bold;
color:#FFF;
text-decoration:none;
&:hover {
    text-decoration:underline;
}
`;
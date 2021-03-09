import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    font-size: 14px;
    background-color: #293F4C;
    width: 100%;
    line-height: 21px;
    font-weight: 200;
    padding-top: 20px;
    padding-bottom: 20px;
`;
export const Row1 = styled.div`
    display:block;
    max-width: 1310px;
    margin-right: auto;
    margin-left: auto;
`;
export const Row = styled.div`
    display:flex;
    align-items: center;
    min-height: 50px;
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
    font-size: 18px;
    font-family: 'Fira Sans', sans-serif;
    &:hover {
        text-decoration:underline;
    }
`;
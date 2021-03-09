import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    max-width: 1310px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width:890px) {
        flex-direction: column;
    }
`;

export const ColLeft = styled.div`
width: 60%;
@media screen and (max-width:890px) {
    width: 100%;
}
`;

export const ColRight = styled.div`
width: 30%;
@media screen and (max-width:890px) {
    width: 100%;
}
`;


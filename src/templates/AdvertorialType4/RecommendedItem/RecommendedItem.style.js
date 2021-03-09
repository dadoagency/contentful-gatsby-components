import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 8px;
    height: 100%;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    & > a {
        text-decoration: none;
    }
`;

export const Details = styled.div`
    padding: 1.5rem;
    color: #424242;
    & p > b {
        color: #E26447;
    }
    & h3:hover {
        text-decoration: underline;
    }
`

export const Image = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    min-height: 192px;
    position: relative;
    & > img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        opacity: 1;
        transition: opacity 500ms ease 0s;
    }
`
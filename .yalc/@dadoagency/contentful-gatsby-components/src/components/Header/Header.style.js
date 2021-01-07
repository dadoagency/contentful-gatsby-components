import styled from 'styled-components'

export const Section = styled.section`
  position: ${props => props.fixedHeader ? 'fixed' : 'initial'};
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #fff;
  box-shadow: ${props => props.fixedHeader && '0 0 4px rgba(0, 0, 0, 0.4)'};
`
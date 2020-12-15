import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 750px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1170px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1250px;
  }
`

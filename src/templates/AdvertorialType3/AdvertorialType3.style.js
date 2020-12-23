import styled from "styled-components"

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
  justify-content: center;
`

export const MainContainer = styled.div`
  margin: 0px auto;
  flex: 0 0 100%;
  margin-top: 15px;
  max-width: 100%;
  padding: 0;
  box-shadow: 0 0 28px -1px rgba(0, 0, 0, 0.05);
  background: #fff;
  .section {
    padding: 20px 20px;
    @media (min-width: 992px) {
      padding: 20px 30px;
    }
    @media (min-width: 1200px) {
      padding: 20px 60px;
    }
    @media (min-width: 1280px) {
      padding: 20px 70px;
    }
  }

  @media (min-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
    padding: 0;
  }

  @media (min-width: 1200px) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    /* padding: 0px 50px; */
    margin-left: 50px;
    margin-right: 50px;
  }
`

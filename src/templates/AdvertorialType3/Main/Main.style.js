import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  background: #fff;
  /* box-shadow: 0 0 28px -1px rgba(0, 0, 0, 0.05); */
  transition: none;
  > p:first-of-type {
    margin-top: 0;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    color: rgb(80, 80, 80);
    margin-top: 20px;
    margin-bottom: 10px;
  }
  b {
    color: #505050;
  }
  li {
    p {
      margin: 0;
      padding: 0;
      color: #212529;
      line-height: normal;
    }
  }
  .page-btn {
    margin-bottom: 10px;
  }
`

import styled from "styled-components"

export const Wrapper = styled.header`
  background: #fff;
  padding: 15px 0;
  width: 100%;
  img {
    height: 40px;
  }
  @media (max-width: 768px) {
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .productLink {
    display: none;
  }
  .page-btn {
    margin: 0;
  }
  .article-img-wrapper {
    height: 15px;
  }
  .arrow-img {
    height: 15px;
    transform: scale(0.7);
    margin: auto 0;
    img {
      height: 29px;
    }
  }
  @media (min-width: 1200px) {
    .productLink {
      display: initial;
    }
  }
`

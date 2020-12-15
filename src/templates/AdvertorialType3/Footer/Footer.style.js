import styled from "styled-components"

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  padding: 32px 48px;
  background-color: #444444;
  text-align: center;
  box-sizing: border-box;
  font-size: 11px;
`
export const Nav = styled.nav``

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`

/* xs: "600px",
    s: "768px",
    m: "992px",
    l: "1200px",
    xl: "1480px", */

export const ListItem = styled.li`
  margin-right: 20px;
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 600px) {
    margin: 5px;

    :last-child {
      margin: 5px;
    }
  }
`

export const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #808080;
  font-size: 12.8px;
  transition: all 0.2s ease-in-out;
  :link,
  :visited,
  :hover,
  :active {
    /* color: white; */
    color: #2290bd;
  }
`

export const Copyright = styled.p`
  line-height: 26px;
  /* margin-top: 20px; */
  margin-top: 0;
  margin-bottom: 10px;
  margin-bottom: 0;
  font-size: 14.4px;
  text-align: center;
  color: #b3b3b3;
  a {
    color: #2290bd;
  }
`

export const Disclaimer = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #000;
  margin: 0;
`

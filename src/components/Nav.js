import Styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1 id="logo">
        <a href="#">Capture</a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our Work</a>
        </li>
        <li>
          <a href="#">3. Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = Styled.div`
    min-height: 10vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a {
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }

    li {
        position: relative;
        padding-left: 10rem;
    }
`;

export default Nav;

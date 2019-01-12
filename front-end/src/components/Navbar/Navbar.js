import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class NavBar extends React.Component {
  state = {
    // ...
  };

  render() {
    return (
      <div>
        <StyledNav>
          <StyledLeftUL>
            <StyledLI>Home</StyledLI>
            <StyledLI>About</StyledLI>
            <StyledLI>Contact Us</StyledLI>
            <StyledLI>
              <span>Categories ></span>
              <StyledDropdown>
                <a href="/">Men</a>
                <a href="/">Women</a>
                <a href="/">Kids</a>
              </StyledDropdown>
            </StyledLI>
          </StyledLeftUL>
          <StyledRightUL>
            <StyledLI>Order Status</StyledLI>
            <StyledLI>Login/SignUp</StyledLI>
          </StyledRightUL>
        </StyledNav>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

const StyledNav = styled.nav`
  display: flex;
  flex: 1;
  padding-left: 20px;
  position: sticky;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  height: 56px;
  font-size: 13px;
`;

const StyledLeftUL = styled.ul`
  display: flex;
  width: 70%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const StyledRightUL = styled.ul`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const StyledLI = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
  &:hover > div {
    display: block;
  }
`;

const StyledDropdown = styled.div`
  display: none;
  position: absolute;
  top: 56px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  & > a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  & > a:hover {
    background-color: #e0e0e0;
  }
`;

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
          <StyledUL>
            <StyledLI>Home</StyledLI>
            <StyledLI>
              <span>Categories ></span>
              <StyledDropdown>
                <a href="/">Men</a>
                <a href="/">Women</a>
                <a href="/">Kids</a>
              </StyledDropdown>
            </StyledLI>
            <StyledLI>Track Order</StyledLI>
            <StyledLI>About Us</StyledLI>
          </StyledUL>
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
`;

const StyledUL = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const StyledLI = styled.li`
  display: flex;
  justify-content: center;
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

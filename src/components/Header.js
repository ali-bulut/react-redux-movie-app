import React from "react";
import { menuStyle, fixedMenuStyle } from "../helpers/styleHelper";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  state = {
    menuFixed: null,
    overlayFixed: false
  };

  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: null })

  render() {
    const { menuFixed } = this.state;

    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image
                  size="mini"
                  src="https://react.semantic-ui.com/logo.png"

                />
              </Menu.Item>
              <Menu.Item header as={Link} to="/" exact="true">MOVIE APP</Menu.Item>
              <Menu.Item as={NavLink} exact to="/movies">
                Movies
              </Menu.Item>
              <Menu.Item as={NavLink} exact to="/movies/new">
                Add New Movie
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}

export default Header;

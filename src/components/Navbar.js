import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../reducers/ActionCreators";
class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  handleLogout() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <Router>
        <Navbar color="indigo" dark expand="md" sticky="top" scrolling>
          <NavbarBrand href="/">
            <strong>Navbar</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Friends</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Colleges</NavLink>
              </NavItem>
              <NavItem className="nav-search">
                <form className="form-inline">
                  <input
                    className="form-control form-control-sm mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </NavItem>
            </NavbarNav>
            {this.props.user.email && (
              <NavbarNav right>
                <NavItem>
                  <Dropdown
                    size="lg"
                    isOpen={this.props.dropdownOpen}
                    toggle={this.props.toggle}
                  >
                    <DropdownToggle nav>
                      <i className="fa fa-user icon-profile" />
                      <i className="fa fa-angle-down" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="#">Profile</DropdownItem>
                      <DropdownItem href="#">Settings</DropdownItem>
                      <DropdownItem href="#" onClick={this.handleLogout}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            )}
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(NavbarHeader);
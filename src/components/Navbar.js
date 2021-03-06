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
  DropdownItem,
  Container
} from "mdbreact";
import { connect } from "react-redux";
import { logout } from "../reducers/ActionCreators";

class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false,
      userName: ""
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.setState({
      dropdownOpen: false
    });
  }

  handleSearch(e) {
    e.preventDefault();
    const userName = e.target.value;
    console.log(new RegExp(userName));
    this.setState({
      userName
    });
  }

  render() {
    return (
      <div>
        <Navbar color="indigo" dark expand="sm" scrolling fixed="top">
          <NavbarBrand href="/">
            <strong>Navbar</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/friends">Friends</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/collegesauisfg">Colleges</NavLink>
              </NavItem>
              <NavItem className="nav-search">
                <form className="form-inline">
                  <input
                    className="form-control form-control-sm mr-sm-3"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={this.state.userName}
                    onChange={this.handleSearch}
                  />
                </form>
              </NavItem>
            </NavbarNav>
            {this.props.user.email && (
              <NavbarNav right>
                <NavItem>
                  <Dropdown
                    size="lg"
                    isopen={this.props.dropdownOpen}
                    toggle={this.props.toggle}
                  >
                    <DropdownToggle nav>
                      <i className="fa fa-user icon-profile" />
                      <i className="fa fa-angle-down" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink to="/profile" onClick={this.handleClick}>
                          Profile
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink to="/settings" onClick={this.handleClick}>
                          Settings
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink to="/" onClick={this.handleLogout}>
                          Logout
                        </NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            )}
          </Collapse>
        </Navbar>
        <Container className="text-center mb-custom" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(NavbarHeader);

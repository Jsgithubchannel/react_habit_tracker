import React, { PureComponent } from "react";

class Nav extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="fas fa-leaf navbar-logo"></i>
        Habit Tracker
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Nav;

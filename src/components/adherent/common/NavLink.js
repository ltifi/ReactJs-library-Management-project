import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NavLink extends React.Component {
  render() {
    console.log(this.context.router.route.location.pathname);
    var isActive =
      this.context.router.route.location.pathname === this.props.to;
    var className = isActive ? "nav-link active" : "nav-link";

    return <Link className={className} {...this.props} />;
  }
}

NavLink.contextTypes = {
  router: PropTypes.object,
};

export default NavLink;

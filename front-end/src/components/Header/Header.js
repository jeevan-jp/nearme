import React from "react";

class Header extends React.Component {
  state = {
    categories: ["Booked Appointments", "Nearby Shops"]
  };

  render() {
    const { booked } = this.state;
    return <div>Header {booked}</div>;
  }
}

export default Header;

import React from "react";
import Navbar from "../../components/Navbar";

class Home extends React.Component {
  state = {
    categories: ["Booked Appointments", "Nearby Shops"]
  };

  render() {
    return <Navbar />;
  }
}

export default Home;

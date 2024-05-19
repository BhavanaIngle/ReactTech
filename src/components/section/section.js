import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Section extends React.Component {
  render() {
    return (
      <div className="section-container">
        <h1>Welcome to My Website</h1>
        <p>This is the main page of my website.</p>
        <p>Feel free to explore!</p>
      </div>
    );
  }
}

export default Section;

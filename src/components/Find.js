import React, { Component } from "react";
import { Link } from "react-router-dom";
class Find extends Component {
  render() {
    return (
      <div>
        <div class="search-model" style={{ display: "block" }}>
          <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="search-close-switch">
              <Link to="/">
                <i class="icon_close"></i>
              </Link>
            </div>
            <form class="search-model-form">
              <input
                type="text"
                id="search-input"
                placeholder="Search here....."
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Find;

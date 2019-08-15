import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from "../constants";

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="flex pal justify-between nowrap orange pa3">
        <div className="flex flex-fixed black">
          <div className="fw6 mr1">Hacker News</div>
          <Link className="ml1 no-underline black" to="/">
            new
          </Link>
          <div className="ml1">|</div>
          <Link className="ml1 no-underline black" to="/top">
            top
          </Link>
          <div className="ml1">|</div>
          <Link className="ml1 no-underline black" to="/search">
            search
          </Link>
          {authToken && (
            <div className="flex">
              <div className="ml1">|</div>
              <Link className="ml1 no-underline black" to="/create">
                submit
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                this.props.history.push("/");
              }}
            >
              logout
            </div>
          ) : (
            <Link className="ml1 no-underline black" to="/login">
              login
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);

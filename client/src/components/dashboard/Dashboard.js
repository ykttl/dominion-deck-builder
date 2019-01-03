import React, { Component } from "react";
import { connect } from "react-redux";
import CardsToPick from "./CardsToPick";
import SideBar from "./Sidebar";
import * as actions from "../../actions/action";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s9">
          <CardsToPick />
        </div>
        <div className="col s3 sidebar">
          <SideBar />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Dashboard);

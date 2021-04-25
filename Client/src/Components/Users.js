import AjaxUtils from "../Utils/AjaxUtils";

import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

import "../styles/Components/Users.css";
import AppBar from "./AppBar";
import BasicCard from "./BasicCard";
import { connect } from "react-redux";
import {
  fetchUsers,
  exportData,
  handleUpdateUser
} from "../Redux/Actions/UserAction";

function Users(props) {
  console.log(props);
  const [state, setState] = useState({});
  useEffect(() => {
    setState({ users: [...props.users] });
    return () => {};
  }, [props.users]);

  const handleUpdateUser = (email, payload) => {
    props.handleUpdateUser(email, payload);
  };

  let userCards = [];
  let { users = [] } = state;
  console.log(state, userCards, users);
  users.length > 0 &&
    users.forEach((user, idx) => {
      userCards.push(
        <BasicCard
          userData={user}
          key={idx}
          classname="basic-card"
          handleUpdateUser={handleUpdateUser}
        />
      );
    });
  console.log(state, userCards, users);

  const handleFetchUsers = () => props.fetchUsers();

  const handleExportData = () => exportData();

  return (
    <div className="users-list-container">
      <AppBar title={"Users"} />

      <div className="users-list">
        <div className="fetch-button">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleFetchUsers()}
          >
            Fetch Users
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleExportData()}
          >
            Export Data
          </Button>
        </div>
        <div className="users-card-list">
          {userCards.length > 0 && userCards}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  console.log(store);
  return {
    users: store.users
  };
};

export default connect(mapStateToProps, { fetchUsers, handleUpdateUser })(
  Users
);

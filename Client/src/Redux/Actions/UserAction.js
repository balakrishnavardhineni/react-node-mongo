import axios from "axios";
import AjaxUtils from "../../Utils/AjaxUtils";

const addUsersAction = (data) => ({ type: "ADD_USERS", payload: data });
const updateUserAction = (data) => ({ type: "UPDATE_USER", payload: data });

const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://gorest.co.in/public-api/users")
      .then(async (response) => {
        const res = await response.data;
        dispatch(addUsersAction(res.data));
        let payload = { userList: res.data };
        AjaxUtils.insertUser(payload);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};

const handleUpdateUser = (mail, userData) => {
  console.log(mail, userData);
  return (dispatch) => {
    AjaxUtils.updateUserByEmail(mail, userData)
      .then(async (response) => {
        console.log("exported", response);
        dispatch(updateUserAction(userData));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};

const exportData = () => {
  AjaxUtils.exportData()
    .then(async (response) => {
      console.log("exported", response);
    })
    .catch((error) => {
      throw new Error(error);
    });
};
export { fetchUsers, exportData, handleUpdateUser };

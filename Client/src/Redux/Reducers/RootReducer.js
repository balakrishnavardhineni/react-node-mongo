import constant from "../Constants/constants";

const initialState = {
  users: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case constant.ADD_USERS:
      return {
        ...state,
        users: [...action.payload]
      };
    case constant.UPDATE_USER:
      state.users.push({ ...action.payload });
      return {
        ...state
      };

    default:
      return state;
  }
}

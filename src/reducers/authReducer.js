import { LOG_OUT, CHECK_USER } from "../actions/types";

const initState = {
  users: [],
  currentUser: null,
  authorization: false
};

const authReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHECK_USER:
      const tempUsers = [...state.users];
      const exist = tempUsers.find(user => user.username === payload.username);
      if (exist === undefined) {
        tempUsers.push(payload);
        return {
          ...state,
          users: tempUsers,
          currentUser: payload,
          authorization: true
        };
      } else if (exist !== undefined && exist.password === payload.password) {
        return {
          ...state,
          currentUser: payload,
          authorization: true
        };
      } else {
        alert("Wrong password");
        return {
          ...state
        };
      }
    case LOG_OUT:
      return {
        ...state,
        currentUser: null,
        authorization: false
      };

    default:
      return state;
  }
};

export default authReducer;

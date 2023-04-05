import RoleConstants from "../constants/RoleConstants";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: {
          auth: false,
          userRole: RoleConstants.NONE,
        },
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload, //Set user role and auth
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: {
          auth: false,
          userRole: RoleConstants.NONE,
        },
        isFetching: false,
        error: true,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (following) => following !== action.payload
          ),
        },
      };
    case "LOGOUT":
      return {
        user: {
          auth: false,
          userRole: RoleConstants.NONE,
        },
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;

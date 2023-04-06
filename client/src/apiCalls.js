import axiosInstance from "./axios";
import RoleConstants from "./constants/RoleConstants";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axiosInstance.post("/auth/login", userCredential);
    console.log(res.data.user);
    if (res.data?.token) {
      let acc_token = "Bearer " + res.data.token.access;
      axiosInstance.defaults.headers["Authorization"] = acc_token;
      localStorage.setItem("access_token", res.data.token.access);
      localStorage.setItem("refresh_token", res.data.token.refresh);
    } else {
      alert("No jwt token found");
    }
    let data = res.data.user;
    data = {
      ...data,
      auth: true,
      userRole: RoleConstants.EMPLOYEE,
    };
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

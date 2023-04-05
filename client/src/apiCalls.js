import axiosInstance from "./axios";
import RoleConstants from "./constants/RoleConstants";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axiosInstance.post("/auth/login", userCredential);
    console.log(res.data);
    if (res.data?.token) {
      let acc_token = "JWT " + res.data.token.access;
      axiosInstance.defaults.headers["Authorization"] = acc_token;
      sessionStorage.setItem("access_token", res.data.token.access);
      sessionStorage.setItem("refresh_token", res.data.token.refresh);
    } else {
      alert("No jwt token found");
    }
    let data = res.data;
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

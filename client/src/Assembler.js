import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import RouteConstants from "./constants/RouteConstants";
import RoleConstants from "./constants/RoleConstants";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Network from "./pages/Network";
import JobDetail from "./pages/JobDetail";
import Jobs from "./pages/Jobs";
import Messaging from "./pages/Messaging";
import Home from "./pages/Home";

const Assembler = () => {
  const { user } = useContext(AuthContext);

  let routes = [
    {
      route: RouteConstants.LOGIN,
      component: <Login />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.LANDING_PAGE,
      component: user.auth ? <Home /> : <Login />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.SIGNUP,
      component: user.auth ? (
        <Navigate to={RouteConstants.LANDING_PAGE} />
      ) : (
        <Signup />
      ),
      access: RoleConstants.NONE,
    },
    {
      route: RouteConstants.NETWORK_PAGE,
      component: <Network />,
      access: RoleConstants.EMPLOYEE,
    },
    {
      route: RouteConstants.MESSAGING_PAGE,
      component: <Messaging />,
      access: RoleConstants.EMPLOYEE,
    },
    {
      route: RouteConstants.JOB_DETAILS_PAGE,
      component: <JobDetail />,
      access: RoleConstants.EMPLOYEE,
    },
    {
      route: RouteConstants.JOBS_PAGE,
      component: <Jobs />,
      access: RoleConstants.EMPLOYEE,
    },
  ];

  return (
    <div>
      <Router>
        {/*<DJSCEHeader />
        {user.userRole === RoleConstants.TEACHER ||
        user.userRole === RoleConstants.ADMIN ? (
          <TeacherNavBar />
        ) : user.userRole == RoleConstants.EMPLOYEE ? (
          <StudentNavBar />
        ) : (
          <></>
        )}*/}
        <Routes>
          {routes.map((route, key) => (
            <Route
              path={route.route}
              exact
              key={key}
              element={
                <Row>
                  <Col>
                    <ValidationComponent
                      access={route.access}
                      component={route.component}
                    />
                  </Col>
                </Row>
              }
            />
          ))}

          {/* do not change */}
          <Route
            path="*"
            element={
              <Row style={{ margin: "20px 0 0 0" }}>
                <Col style={{ padding: "10px 90px" }}>
                  <>
                    <h1>404 not found</h1>
                  </>
                </Col>
              </Row>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

let ValidationComponent = (props) => {
  const { user } = useContext(AuthContext);

  if (
    user.auth ||
    (props.access === RoleConstants.NONE &&
      user.userRole === RoleConstants.NONE) ||
    props.access === RoleConstants.ALL
  ) {
    if (
      user.userRole === props.access ||
      user.userRole === RoleConstants.ADMIN ||
      props.access === RoleConstants.ALL
    ) {
      return props.component;
    } else if (props.access !== "" && user.userRole !== props.access) {
      return <div>401 :Access Denied</div>;
    }
  } else {
    return (
      <Navigate
        to={RouteConstants.LOGIN + `?nextPage=${window.location.pathname}`}
      />
    );
  }
};

export default Assembler;

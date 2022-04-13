import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const AuthRoute = ({ component: Component, ...rest }) => {
  const {
    // result: {
    account: { role },
    authenticated,
    // },
  } = useSelector((state) => state.auth);

  // && role !== "ROLE_USER"

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true && role !== "ROLE_USER" ? (
          <Redirect to="/" />
        ) : (
          <>
            {/* <Redirect to="/signin" /> */}
            <Component {...props} />
          </>
        )
      }
    />
  );
};

export const CheckRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Redirect to="/signin" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export const UserRoute = ({ component: Component, ...rest }) => {
  const {
    authenticated,
    account: { role },
  } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true && role === "ROLE_COMPANY" ? (
          <Redirect to="/" />
        ) : (
          <Redirect to="/signin" />
          // <Component {...props} />
        )
      }
    />
  );
};

export const CompanyRoute = ({ component: Component, ...rest }) => {
  const {
    authenticated,
    account: { role },
  } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true && role === "ROLE_USER" ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

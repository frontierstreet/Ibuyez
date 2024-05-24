import { useAuth } from "modules/common/hooks";
import CONSTANTS from "modules/common/utils/constants";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const { authInfo, userInfo } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(CONSTANTS.routes.propertiesList);
      return;
    }
    if (!authInfo) {
      navigate(CONSTANTS.routes.login);
    }
  }, [authInfo, navigate, userInfo]);

  if (!authInfo) {
    return <div />;
  }
  return children;
};

export default RequiresAuth;

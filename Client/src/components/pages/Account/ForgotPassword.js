import ForgotPasswordForm from "./ForgotPasswordForm";
import { useParams } from "react-router-dom";
import React from "react";
import ChangePassForm from "./ChangePassForm";

function ForgotPassword() {
  const params = useParams();

  return (
    <React.Fragment>
      {!params.token && <ForgotPasswordForm />}
      {params.token && <ChangePassForm token={params.token} />}
    </React.Fragment>
  );
}

export default ForgotPassword;

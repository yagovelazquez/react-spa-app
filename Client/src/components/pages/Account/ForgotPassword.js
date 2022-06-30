import ForgotPasswordForm from "./ForgotPasswordForm";
import { useParams } from "react-router-dom";
import React from "react";
import ChangePassForm from "./ChangePassForm";
import AnimatedPage from "../../commom/AnimatedPage";

function ForgotPassword() {
  const params = useParams();

  return (
    <AnimatedPage>
      {!params.token && <ForgotPasswordForm />}
      {params.token && <ChangePassForm token={params.token} />}
    </AnimatedPage>
  );
}

export default ForgotPassword;

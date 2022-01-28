import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton(props) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={props.title}
      onPress={handleSubmit}
      loading={props.loading}
      disabled={props.disabled}
      {...props}
    />
  );
}

export default SubmitButton;

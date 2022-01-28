import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../FormTextInput";
import ErrorMessage from "../ErrorMessage";

function AppFormField({ name, width, comment, ...otherProps }) {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext() ?? {};

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        comment={comment}
        numberOfLines={4}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

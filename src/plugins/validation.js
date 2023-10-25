import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  email,
  confirmed,
  min_value as minVal,
  max_value as maxVal,
} from "@vee-validate/rules";
export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);

    configure({
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};

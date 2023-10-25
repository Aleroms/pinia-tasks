import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  configure,
} from "vee-validate";
import {
  required,
  min_value as minVal,
  max_value as maxVal,
} from "@vee-validate/rules";
export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    defineRule("required", required);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);

    configure({
      generateMessage: (ctx) => {
        const message = `must be a valid ${ctx.field}`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};

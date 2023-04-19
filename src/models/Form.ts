import * as yup from "yup";

export const authFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("email address is required"),
  password: yup
    .string()
    .min(6, "Password should be a minimum length of 6")
    .max(12, "Password should have a miximum length of 12")
    .required("Pasword is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match")
    .required("Confirm password is required"),
});

export interface AuthForm {
  email: string;
  password: string;
  confirmPassword: string;
}

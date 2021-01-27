import * as yup from 'yup';


export default yup.object().shape({
    userName: yup
    .string()
    .required('User Name is required'),
    email: yup
    .string()
    .email()
    .required('Email is required'),
    password: yup
    .string()
    .required('Password is required'),
    tos: yup
    .boolean()
    .oneOf([true], 'You must accept our terms of service')
})
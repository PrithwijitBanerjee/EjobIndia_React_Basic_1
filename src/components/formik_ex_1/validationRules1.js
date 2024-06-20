import * as Yup from 'yup';

export const validation = Yup.object().shape({
    name: Yup.string().required(' **user name is required!!!').min(5, 'user name must be minimum 5 characters').max(30, 'user name must be maximum 30 characters'),
    age: Yup.number().required(' **age is required!!!').positive('age can not be negative').min(10, 'age must be greater than 10').max(20, 'age must be maximum 20')
});
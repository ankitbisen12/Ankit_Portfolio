import { object, string } from 'yup';

export const contactSchema = object({
    name: string().required('Name is required'),
    email: string().email('Invalid email').required('Email is required'),
    message: string().required('Message is required'),
});


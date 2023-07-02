import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Email must be a valid email address').nonempty('Email cannot be empty'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).+$/, 'Password unmet complexity requirements')
    .nonempty('Password cannot be empty'),
});

export default loginSchema;

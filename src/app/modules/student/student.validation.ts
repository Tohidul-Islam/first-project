import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, { message: 'First name cannot be more than 20 characters' })
    .min(1, { message: 'First name is required' }),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .regex(/^[a-zA-Z]+$/, {
      message: 'Last name must contain only alphabetic characters',
    })
    .min(1, { message: 'Last name is required' }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: "Father's name is required" }),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father's occupation is required" }),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father's contact number is required" }),
  motherName: z.string().min(1, { message: "Mother's name is required" }),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother's occupation is required" }),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother's contact number is required" }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: "Local guardian's name is required" }),
  occupation: z
    .string()
    .min(1, { message: "Local guardian's occupation is required" }),
  contactNo: z
    .string()
    .min(1, { message: "Local guardian's contact number is required" }),
  address: z
    .string()
    .min(1, { message: "Local guardian's address is required" }),
});

const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'Student ID is required' }),
  name: userNameValidationSchema,
  password: z.string().max(20),
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({
      message: 'Gender must be one of male, female, or other',
    }),
  }),
  dateOfBirth: z.string().min(1, { message: 'Date of birth is required' }),
  email: z
    .string()
    .email({ message: 'Email must be a valid email address' })
    .min(1, { message: 'Email is required' }),
  contactNumber: z.string().min(1, { message: 'Contact number is required' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency contact number is required' }),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'AB+', 'AB-']).optional(),
  presentAddress: z.string().min(1, { message: 'Present address is required' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent address is required' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean().default(false),
});

export default studentValidationSchema;

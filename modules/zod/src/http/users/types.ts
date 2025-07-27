import type z from 'zod';
import type {
	createUserSchema,
	errorResponseSchema,
	paramsSchema,
	updateUserSchema,
	userResponseSchema,
} from './schemas';

export type CreateUser = z.infer<typeof createUserSchema>;

export type UserResponse = z.infer<typeof userResponseSchema>;

export type UpdateUser = z.infer<typeof updateUserSchema>;

export type Params = z.infer<typeof paramsSchema>;

export type ErrorResponse = z.infer<typeof errorResponseSchema>;

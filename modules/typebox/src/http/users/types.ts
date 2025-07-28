import type { Static } from '@sinclair/typebox';
import type {
	createUserSchema,
	errorResponseSchema,
	paramsSchema,
	updateUserSchema,
	userResponseSchema,
} from './schemas';

export type CreateUser = Static<typeof createUserSchema>;

export type UserResponse = Static<typeof userResponseSchema>;

export type UpdateUser = Static<typeof updateUserSchema>;

export type Params = Static<typeof paramsSchema>;

export type ErrorResponse = Static<typeof errorResponseSchema>;

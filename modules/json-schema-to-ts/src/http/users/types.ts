import type { FromSchema } from 'json-schema-to-ts';
import type {
	createUserSchema,
	errorResponseSchema,
	paramsSchema,
	updateUserSchema,
	userResponseSchema,
} from './schemas';

export type CreateUser = FromSchema<typeof createUserSchema>;
export type UpdateUser = FromSchema<typeof updateUserSchema>;
export type Params = FromSchema<typeof paramsSchema>;
export type ErrorResponse = FromSchema<typeof errorResponseSchema>;

export type UserResponse = FromSchema<
	typeof userResponseSchema,
	{
		deserialize: [
			{ pattern: { type: 'string'; format: 'date-time' }; output: Date },
		];
	}
>;

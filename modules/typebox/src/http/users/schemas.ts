import { Type } from '@sinclair/typebox';

export const createUserSchema = Type.Object({
	firstName: Type.String(),
	secondName: Type.String(),
});

export const userResponseSchema = Type.Intersect([
	Type.Object({
		id: Type.String({ format: 'uuid' }),
		createdAt: Type.String({ format: 'date-time' }),
		updatedAt: Type.String({ format: 'date-time' }),
	}),
	createUserSchema,
]);

export const updateUserSchema = Type.Partial(createUserSchema);

export const paramsSchema = Type.Object({
	id: Type.String({ format: 'uuid' }),
});

export const usersResponseSchema = Type.Array(userResponseSchema);

export const errorResponseSchema = Type.Object({
	message: Type.String(),
});

export const schemas = [
	createUserSchema,
	userResponseSchema,
	updateUserSchema,
	paramsSchema,
	usersResponseSchema,
	errorResponseSchema,
] as const;

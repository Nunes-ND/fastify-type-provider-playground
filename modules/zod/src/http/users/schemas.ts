import { z } from 'zod';

export const createUserSchema = z.object({
	firstName: z.string(),
	secondName: z.string(),
});

export const userResponseSchema = z
	.object({
		id: z.uuid(),
		createdAt: z.date(),
		updatedAt: z.date(),
	})
	.extend(createUserSchema.shape);

export const updateUserSchema = createUserSchema.partial();

export const paramsSchema = z.object({
	id: z.uuid(),
});

export const usersResponseSchema = z.array(userResponseSchema);

export const errorResponseSchema = z.object({
	message: z.string(),
});

export const schemas = [
	createUserSchema,
	userResponseSchema,
	updateUserSchema,
	paramsSchema,
	usersResponseSchema,
	errorResponseSchema,
] as const;

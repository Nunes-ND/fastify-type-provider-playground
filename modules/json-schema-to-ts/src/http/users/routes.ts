import { randomUUID } from 'node:crypto';
import type { FastifyPluginAsyncJsonSchemaToTs } from '@fastify/type-provider-json-schema-to-ts';
import type { SharedSchemaOptions } from './schemas';
import type { ErrorResponse, UserResponse } from './types';

const users: UserResponse[] = [];

export const userRoutes: FastifyPluginAsyncJsonSchemaToTs<
	SharedSchemaOptions
> = async (fastify): Promise<void> => {
	fastify.post(
		'/users',
		{
			schema: {
				body: { $ref: 'createUserSchema' },
				response: {
					201: { $ref: 'userResponseSchema' },
				},
			},
		},
		(request, reply) => {
			const { firstName, secondName } = request.body;
			const now = new Date();
			const newUser: UserResponse = {
				id: randomUUID(),
				firstName,
				secondName,
				createdAt: now,
				updatedAt: now,
			};
			users.push(newUser);
			reply.status(201).send(newUser);
		},
	);

	fastify.get(
		'/users',
		{
			schema: {
				response: {
					200: { $ref: 'usersResponseSchema' },
				},
			},
		},
		(_request, reply) => {
			reply.send(users);
		},
	);

	fastify.get(
		'/users/:id',
		{
			schema: {
				params: { $ref: 'paramsSchema' },
				response: {
					200: { $ref: 'userResponseSchema' },
					404: { $ref: 'errorResponseSchema' },
				},
			},
		},
		(request, reply) => {
			const { id } = request.params;
			const user = users.find((u) => u.id === id);
			if (!user) {
				const error: ErrorResponse = { message: 'User not found' };
				reply.status(404).send(error);
				return;
			}
			reply.send(user);
		},
	);

	fastify.put(
		'/users/:id',
		{
			schema: {
				params: { $ref: 'paramsSchema' },
				body: { $ref: 'updateUserSchema' },
				response: {
					200: { $ref: 'userResponseSchema' },
					404: { $ref: 'errorResponseSchema' },
				},
			},
		},
		(request, reply) => {
			const { id } = request.params;
			const userIndex = users.findIndex((u) => u.id === id);
			if (userIndex === -1) {
				const error: ErrorResponse = { message: 'User not found' };
				reply.status(404).send(error);
				return;
			}
			const existingUser = users[userIndex];
			const updatedUser: UserResponse = {
				...existingUser,
				...request.body,
				updatedAt: new Date(),
			};
			users[userIndex] = updatedUser;
			reply.send(updatedUser);
		},
	);

	fastify.delete(
		'/users/:id',
		{
			schema: {
				params: { $ref: 'paramsSchema' },
				response: {
					204: { type: 'null' },
					404: { $ref: 'errorResponseSchema' },
				},
			},
		},
		(request, reply) => {
			const { id } = request.params;
			const userIndex = users.findIndex((u) => u.id === id);
			if (userIndex === -1) {
				const error: ErrorResponse = { message: 'User not found' };
				reply.status(404).send(error);
				return;
			}
			users.splice(userIndex, 1);
			reply.status(204).send();
		},
	);
};

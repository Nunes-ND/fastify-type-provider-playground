import { fastify } from 'json-schema-to-ts/src/http/server';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

describe('Generic User CRUD API - Integration Tests', () => {
	let app: typeof fastify;

	beforeAll(async () => {
		app = fastify;
		await app.ready();
	});

	afterAll(async () => {
		await app.close();
	});

	let userId: string;
	const userPayload = {
		firstName: 'John',
		secondName: 'Doe',
	};

	it('should create a new user via POST /users', async () => {
		const response = await app.inject({
			method: 'POST',
			url: '/users',
			payload: userPayload,
		});

		expect(response.statusCode).toBe(201);
		const body = JSON.parse(response.payload);

		expect(body.id).toBeTypeOf('string');
		expect(body.firstName).toBe(userPayload.firstName);
		expect(body.secondName).toBe(userPayload.secondName);
		expect(body.createdAt).toBeTypeOf('string');
		expect(body.updatedAt).toBeTypeOf('string');

		userId = body.id;
	});

	it('should retrieve all users via GET /users', async () => {
		const response = await app.inject({
			method: 'GET',
			url: '/users',
		});

		expect(response.statusCode).toBe(200);
		const body = JSON.parse(response.payload);

		expect(Array.isArray(body)).toBe(true);
		expect(body.length).toBeGreaterThanOrEqual(1);
		expect(body.some((user: { id: string }) => user.id === userId)).toBe(true);
	});

	it('should retrieve a specific user via GET /users/:id', async () => {
		const response = await app.inject({
			method: 'GET',
			url: `/users/${userId}`,
		});

		expect(response.statusCode).toBe(200);
		const body = JSON.parse(response.payload);

		expect(body.id).toBe(userId);
		expect(body.firstName).toBe(userPayload.firstName);
	});

	it('should update a user via PUT /users/:id', async () => {
		const updatePayload = {
			secondName: 'Smith',
		};

		const response = await app.inject({
			method: 'PUT',
			url: `/users/${userId}`,
			payload: updatePayload,
		});

		expect(response.statusCode).toBe(200);
		const body = JSON.parse(response.payload);

		expect(body.id).toBe(userId);
		expect(body.firstName).toBe(userPayload.firstName);
		expect(body.secondName).toBe(updatePayload.secondName);
		expect(new Date(body.updatedAt) > new Date(body.createdAt)).toBe(true);
	});

	it('should delete a user via DELETE /users/:id', async () => {
		const response = await app.inject({
			method: 'DELETE',
			url: `/users/${userId}`,
		});

		expect(response.statusCode).toBe(204);
	});

	it('should return 404 when trying to get a deleted user', async () => {
		const response = await app.inject({
			method: 'GET',
			url: `/users/${userId}`,
		});

		expect(response.statusCode).toBe(404);
		const body = JSON.parse(response.payload);
		expect(body.message).toBe('User not found');
	});
});

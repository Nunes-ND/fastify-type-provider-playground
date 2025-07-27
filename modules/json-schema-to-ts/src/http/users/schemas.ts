import type { JSONSchema } from 'json-schema-to-ts';

const userProperties = {
	firstName: { type: 'string' },
	secondName: { type: 'string' },
} as const;

export const createUserSchema = {
	$id: 'createUserSchema',
	type: 'object',
	properties: userProperties,
	required: ['firstName', 'secondName'],
	additionalProperties: false,
} as const satisfies JSONSchema;

export const userResponseSchema = {
	$id: 'userResponseSchema',
	type: 'object',
	properties: {
		id: { type: 'string', format: 'uuid' },
		...userProperties,
		createdAt: { type: 'string', format: 'date-time' },
		updatedAt: { type: 'string', format: 'date-time' },
	},
	required: ['id', 'firstName', 'secondName', 'createdAt', 'updatedAt'],
	additionalProperties: false,
} as const satisfies JSONSchema;

export const updateUserSchema = {
	$id: 'updateUserSchema',
	type: 'object',
	properties: userProperties,
	additionalProperties: false,
} as const satisfies JSONSchema;

export const paramsSchema = {
	$id: 'paramsSchema',
	type: 'object',
	properties: {
		id: { type: 'string', format: 'uuid' },
	},
	required: ['id'],
} as const satisfies JSONSchema;

export const usersResponseSchema = {
	$id: 'usersResponseSchema',
	type: 'array',
	items: { $ref: 'userResponseSchema' },
} as const satisfies JSONSchema;

export const errorResponseSchema = {
	$id: 'errorResponseSchema',
	type: 'object',
	properties: {
		message: { type: 'string' },
	},
	required: ['message'],
	additionalProperties: false,
} as const satisfies JSONSchema;

export const schemas = [
	createUserSchema,
	userResponseSchema,
	updateUserSchema,
	paramsSchema,
	usersResponseSchema,
	errorResponseSchema,
] as const;

export type SharedSchemaOptions = {
	ValidatorSchemaOptions: {
		references: [...typeof schemas];
	};
	SerializerSchemaOptions: {
		references: [...typeof schemas];
		deserialize: [
			{ pattern: { type: 'string'; format: 'date-time' }; output: Date },
		];
	};
};

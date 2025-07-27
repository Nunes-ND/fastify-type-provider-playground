import type { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts';
import Fastify from 'fastify';
import { config } from 'shared';
import errorHandlerPlugin from './plugins/errorHandler';
import schemaPlugin from './plugins/schemas';
import { userRoutes } from './users/routes';
import type { SharedSchemaOptions } from './users/schemas';

export const fastify = Fastify(config.serverOptions).withTypeProvider<
	JsonSchemaToTsProvider<SharedSchemaOptions>
>();

fastify.register(errorHandlerPlugin);
fastify.register(schemaPlugin);

fastify.register(userRoutes);

import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import { config } from 'shared';
import errorHandlerPlugin from './plugins/errorHandler';
import { userRoutes } from './users/routes';

export const fastify = Fastify(
	config.serverOptions,
).withTypeProvider<TypeBoxTypeProvider>();

fastify.register(errorHandlerPlugin);

fastify.register(userRoutes);

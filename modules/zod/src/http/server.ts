import Fastify from 'fastify';
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { config } from 'shared';
import errorHandlerPlugin from './plugins/errorHandler';
import { userRoutes } from './users/routes';

export const fastify = Fastify(
	config.serverOptions,
).withTypeProvider<ZodTypeProvider>();

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

fastify.register(errorHandlerPlugin);

fastify.register(userRoutes);

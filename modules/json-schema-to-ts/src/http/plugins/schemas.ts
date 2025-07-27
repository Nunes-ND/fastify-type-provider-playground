import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { schemas } from '../users/schemas';

const schemaPlugin: FastifyPluginAsync = async (fastify) => {
	for (const schema of schemas) {
		fastify.addSchema(schema);
	}
};

export default fp(schemaPlugin);

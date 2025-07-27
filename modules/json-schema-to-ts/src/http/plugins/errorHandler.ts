import type {
	FastifyError,
	FastifyInstance,
	FastifyReply,
	FastifyRequest,
} from 'fastify';
import fp from 'fastify-plugin';

/**
 * This plugin handles application-wide errors.
 *
 * @see https://fastify.dev/docs/latest/Reference/Errors/#error-handling
 */
function errorHandlerPlugin(fastify: FastifyInstance) {
	fastify.setErrorHandler(
		(error: FastifyError, _request: FastifyRequest, reply: FastifyReply) => {
			fastify.log.error(error);

			// Handle validation errors from schemas
			if (error.validation) {
				return reply.status(400).send({
					statusCode: 400,
					error: 'Bad Request',
					message: 'Data Validation Error.',
					details: error.validation,
				});
			}

			const statusCode = error.statusCode || 500;

			// In production, avoid sending detailed error messages for 5xx errors
			const message =
				statusCode < 500 || process.env.NODE_ENV !== 'production'
					? error.message
					: 'An unexpected error occurred.';

			return reply.status(statusCode).send({
				statusCode,
				error: error.name || 'Internal Server Error',
				message,
			});
		},
	);
}

export default fp(errorHandlerPlugin);

export const config = {
	serverOptions: {
		logger:
			process.env.NODE_ENV === 'development'
				? {
						level: 'info',
						transport: {
							target: 'pino-pretty',
							options: {
								translateTime: 'HH:MM:ss Z',
								ignore: 'pid,hostname',
							},
						},
					}
				: false,
	},
};

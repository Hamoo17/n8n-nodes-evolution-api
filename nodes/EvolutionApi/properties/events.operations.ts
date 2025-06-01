import { INodeProperties } from 'n8n-workflow';

// Events API options
export const eventsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['events-api'], // Resource value
		},
	},
	options: [
		// Option = Webhook
		{
			// Set/find Webhook
			name: 'Webhook',
			action: 'Webhook',
			description: 'Set/Fetch Webhook integration',
			value: 'webhook',
		},
		{
			// Set/find Rabbitmq
			name: 'RabbitMQ',
			action: 'RabbitMQ',
			description: 'Set/Fetch RabbitMQ integration',
			value: 'rabbitmq',
		},
	],
	// Setting "Webhook" as default option
	default: 'webhook',
};

import { INodeProperties } from 'n8n-workflow';

// Integrations API options
export const integrationsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['integrations-api'], // Resource value
		},
	},
	options: [
		{
			// Set/find Chatwoot
			name: 'Chatwoot',
			action: 'Chatwoot',
			description: 'Set/Fetch Chatwoot integration',
			value: 'chatwoot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions for Evolution Bot
			name: 'Evolution Bot',
			action: 'Evolution bot',
			description: 'Controls Evolution Bot integration',
			value: 'evolution-bot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions for Typebot
			name: 'Typebot',
			action: 'Typebot',
			description: 'Controls Typebot integration',
			value: 'typebot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions for Dify
			name: 'Dify',
			action: 'Dify',
			description: 'Controls Dify integration',
			value: 'difyBot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions for Flowise
			name: 'Flowise',
			action: 'Flowise',
			description: 'Controls Flowise integration',
			value: 'flowiseBot',
		},
	],
	// Setting "Chatwoot" as default option
	default: 'chatwoot',
};

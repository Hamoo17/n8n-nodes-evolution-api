﻿import { INodeProperties } from 'n8n-workflow';

export const integrationsFields: INodeProperties[] = [
	// Fields = Chatwoot
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
			},
		},
	},
	{
		displayName: 'What Do You Want to Do',
		name: 'resourceForChatwoot',
		type: 'options',
		options: [
			{
				name: 'Set Chatwoot',
				value: 'setChatwoot',
			},
			{
				name: 'Check Chatwoot',
				value: 'findChatwoot',
			},
		],
		default: 'setChatwoot',
		description: 'Choose between activating/deactivating Chatwoot or checking Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
			},
		},
	},
	{
		displayName: 'Enable Chatwoot',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to enable or disable integration with Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Chatwoot Link',
		name: 'chatwootUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the Chatwoot link',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Chatwoot Account ID',
		name: 'chatwootAccountId',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the Chatwoot account ID',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Chatwoot Admin Token',
		name: 'chatwootToken',
		type: 'string',
		required: true,
		typeOptions: {
			password: true,
		},
		default: '',
		description: 'Enter the Chatwoot admin token',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Chatwoot Agent Signature',
		name: 'chatwootSignMsg',
		type: 'boolean',
		default: false,
		description: 'Whether to enable or disable the Chatwoot agent signature',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Reopen Messages in Chatwoot',
		name: 'chatwootReopenConversation',
		type: 'boolean',
		default: false,
		description: 'Whether to enable or disable reopening messages in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Start Conversations as Pending in Chatwoot',
		name: 'chatwootConversationPending',
		type: 'boolean',
		default: false,
		description: 'Whether to start conversations as pending in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Import Contacts to Chatwoot',
		name: 'chatwootImportContacts',
		type: 'boolean',
		default: false,
		description: 'Whether to import contacts to Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Chatwoot Inbox Name',
		name: 'chatwootNameInbox',
		type: 'string',
		default: '',
		description: 'Optional: Enter the Chatwoot Inbox name',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Merge Brazilian Contacts in Chatwoot',
		name: 'chatwootMergeBrazilContacts',
		type: 'boolean',
		default: false,
		description: 'Whether to merge Brazilian contacts in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Import Messages to Chatwoot',
		name: 'chatwootImportMessages',
		type: 'boolean',
		default: false,
		description: 'Whether to import messages to Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Import Messages From How Many Days To Chatwoot',
		name: 'chatwootDaysLimitImportMessages',
		type: 'number',
		default: 0,
		description:
			'Optional: Enter the number of days to limit message import to Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Create Inbox',
		name: 'chatwootAutoCreate',
		type: 'boolean',
		default: true,
		description: 'Whether to create an inbox automatically',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'QRCode Contact Name In Chatwoot',
		name: 'chatwootOrganization',
		type: 'string',
		default: '',
		description: 'Optional: Enter the QRCode contact name in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Logo URL For Contact In Chatwoot',
		name: 'chatwootLogo',
		type: 'string',
		default: 'https://github.com/user-attachments/assets/4d1e9cd6-377a-4383-820a-9a97e6cfbb63',
		description: 'Optional: Enter the logo URL for the contact in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},

	// Fields = Typebot
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
			},
		},
	},

	{
		displayName: 'What Do You Want to Do',
		name: 'resourceForTypebot',
		type: 'options',
		options: [
			{
				name: 'Add Typebot',
				value: 'createTypebot',
			},
			{
				name: 'Check Typebot',
				value: 'findTypebot',
			},
			{
				name: 'Update Typebot',
				value: 'updateTypebot',
			},
			{
				name: 'Delete Typebot',
				value: 'deleteTypebot',
			},
			{
				name: 'Start Typebot',
				value: 'startTypebot',
			},
			{
				name: 'Search Session in Typebot',
				value: 'fetchSessionsTypebot',
			},
			{
				name: 'Change Session Status In Typebot',
				value: 'changeStatusTypebot',
			},
		],
		default: 'createTypebot',
		description: 'Choose an option to perform with the Typebot integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
			},
		},
	},

	// updateTypebot
	{
		displayName: 'Typebot ID',
		name: 'typebotId',
		type: 'string',
		default: '',
		description: 'Enter the Typebot ID you want to search for, leave empty to search all',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: [
					'updateTypebot',
					'findTypebot',
					'deleteTypebot',
					'fetchSessionsTypebot',
					'changeStatusTypebot',
				],
			},
		},
	},

	//Se createTypebot ou updateTypebot
	{
		displayName: 'Typebot API URL',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter your typebot URL',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot', 'startTypebot'],
			},
		},
	},
	{
		displayName: 'Typebot Name',
		name: 'typebot',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of your flow in typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot', 'startTypebot'],
			},
		},
	},
	{
		displayName: 'Trigger Type',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Keyword',
				value: 'keyword',
			},
			{
				name: 'All',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Choose an option to perform with the Typebot integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Trigger Operator',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contains',
				value: 'contains',
			},
			{
				name: 'Equals',
				value: 'equals',
			},
			{
				name: 'Starts With',
				value: 'startsWith',
			},
			{
				name: 'Ends With',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Choose an option to perform with the Typebot integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Trigger',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description:
			'Enter the word/phrase or regex to be used as trigger to start the Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expires In (Minutes)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Enter how many minutes without responses the bot should be disabled',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Finish Keyword',
		name: 'keywordFinish',
		type: 'string',
		default: '#exit',
		required: true,
		description: 'Enter the word/phrase that will be used to close the bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Default Message Delay (In Milliseconds)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Enter how many milliseconds delay the bot will have',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Termination Keyword',
		name: 'unknownMessage',
		type: 'string',
		default: 'Message not recognized',
		required: true,
		description: 'Enter the word/phrase that will be used to close the bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Listen to Messages Sent by Me',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to listen to messages sent by the instance owner',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Pause Bot When I Send A Message',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to pause the bot when you send a message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Keep Bot Session Open',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Whether to keep the bot session open',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Wait Time (In Seconds)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'This is the time the bot will wait for the next messages after receiving a message, then it will join all messages into one',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},

	// startTypebot
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid of the recipient',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['startTypebot', 'changeStatusTypebot'],
			},
		},
	},
	{
		displayName: 'Start Session',
		name: 'startSession',
		type: 'boolean',
		default: false,
		description: 'Whether to start a new session',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['startTypebot'],
			},
		},
	},
	{
		displayName: 'Variables',
		name: 'variables',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'variable',
				displayName: 'Variable',
				values: [
					{
						displayName: 'Variable Name',
						name: 'name',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Variable Value',
						name: 'value',
						type: 'string',
						default: '',
					},
				],
			},
		],
		description: 'Variables to send to typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['startTypebot'],
			},
		},
	},

	// Change Session Status
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Open',
				value: 'opened',
			},
			{
				name: 'Paused',
				value: 'paused',
			},
			{
				name: 'Closed',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Choose what the session status will be',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['changeStatusTypebot'],
			},
		},
	},

	// EVOLUTION BOT
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
			},
		},
	},

	{
		displayName: 'What Do You Want to Do',
		name: 'resourceForEvolutionBot',
		type: 'options',
		options: [
			{
				name: 'Add Evolution Bot',
				value: 'createEvolutionBot',
			},
			{
				name: 'Check Evolution Bot',
				value: 'findEvolutionBot',
			},
			{
				name: 'Update Evolution Bot',
				value: 'updateEvolutionBot',
			},
			{
				name: 'Delete Evolution Bot',
				value: 'deleteEvolutionBot',
			},
			{
				name: 'Search Session in Evolution Bot',
				value: 'fetchSessionsEvolutionBot',
			},
			{
				name: 'Change Session Status in Evolution Bot',
				value: 'changeStatusEvolutionBot',
			},
		],
		default: 'createEvolutionBot',
		description: 'Choose an option to perform with the EvolutionBot integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
			},
		},
	},

	// update EvolutionBot
	{
		displayName: 'Evolution Bot ID',
		name: 'evolutionBotId',
		type: 'string',
		default: '',
		description: 'Enter the Evolution Bot ID you want to search for, leave empty to search all',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: [
					'findEvolutionBot',
					'updateEvolutionBot',
					'deleteEvolutionBot',
					'fetchSessionsEvolutionBot',
					'changeStatusEvolutionBot',
				],
			},
		},
	},

	//Se createEvolutionBot ou updateEvolutionBot
	{
		displayName: 'Evolution Bot API URL',
		name: 'apiUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter your Evolution Bot URL',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Evolution Bot ApiKey',
		name: 'apiKeyBot',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		description: 'Enter your Evolution Bot ApiKey',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Trigger Type',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Keyword',
				value: 'keyword',
			},
			{
				name: 'All',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Choose an option to perform with the EvolutionBot integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Trigger Operator',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contains',
				value: 'contains',
			},
			{
				name: 'Equals',
				value: 'equals',
			},
			{
				name: 'Starts With',
				value: 'startsWith',
			},
			{
				name: 'Ends With',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Choose an option to perform with the EvolutionBot integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Trigger',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description:
			'Enter the word/phrase or regex to be used as trigger to start the EvolutionBot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expires In (Minutes)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Enter how many minutes without responses the bot should be disabled',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Finish Keyword',
		name: 'keywordFinish',
		type: 'string',
		default: '#exit',
		required: true,
		description: 'Enter the word/phrase that will be used to close the bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Default Message Delay (In Milliseconds)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Enter how many milliseconds delay the bot will have',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Unknown Message Text',
		name: 'unknownMessage',
		type: 'string',
		default: 'Message not recognized',
		required: true,
		description: 'Enter the text that will be sent when message is not recognized',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Listen to Messages Sent by Me',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to listen to messages sent by the instance owner',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Pause Bot When I Send A Message',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to pause the bot when you send a message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Keep Bot Session Open',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Whether to keep the bot session open',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Wait Time (In Seconds)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'This is the time the bot will wait for the next messages after receiving a message, then it will join all messages into one',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},

	// Change Session Status EvolutionBot
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid of the recipient',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['changeStatusEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Open',
				value: 'opened',
			},
			{
				name: 'Paused',
				value: 'paused',
			},
			{
				name: 'Closed',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Choose what the session status will be',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['changeStatusEvolutionBot'],
			},
		},
	},

	// Dify
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
			},
		},
	},
	{
		displayName: 'What Do You Want to Do',
		name: 'resourceForDifyBot',
		type: 'options',
		options: [
			{
				name: 'Add Dify',
				value: 'createDify',
			},
			{
				name: 'Check Dify',
				value: 'findDify',
			},
			{
				name: 'Update Dify',
				value: 'updateDify',
			},
			{
				name: 'Delete Dify',
				value: 'deleteDify',
			},
			{
				name: 'Search Session in Dify',
				value: 'fetchSessionsDify',
			},
			{
				name: 'Change Session Status in Dify',
				value: 'changeStatusDify',
			},
		],
		default: 'createDify',
		description: 'Choose an option to perform with the Dify integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
			},
		},
	},
	{
		displayName: 'Bot Type',
		name: 'botType',
		type: 'options',
		options: [
			{
				name: 'Chat Bot',
				value: 'chatBot',
			},
			{
				name: 'Text Generator',
				value: 'textGenerator',
			},
			{
				name: 'Agent',
				value: 'agent',
			},
			{
				name: 'Workflow',
				value: 'workflow',
			},
		],
		default: 'chatBot',
		required: true,
		description: 'Choose the Dify bot type',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['dify'],
				resourceForDifyBot: ['createDify'],
			},
		},
	},

	// update Dify
	{
		displayName: 'Dify ID',
		name: 'difyBotId',
		type: 'string',
		default: '',
		description: 'Enter the Dify ID you want to search for, leave empty to search all',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: [
					'findDify',
					'updateDify',
					'deleteDify',
					'fetchSessionsDify',
					'changeStatusDify',
				],
			},
		},
	},

	//Se createDify ou updateDify
	{
		displayName: 'Dify URL',
		name: 'apiUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter your Dify URL',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Dify ApiKey',
		name: 'apiKeyBot',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		required: true,
		description: 'Enter your Dify bot ApiKey',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Trigger Type',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Keyword',
				value: 'keyword',
			},
			{
				name: 'All',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Choose an option to perform with the Dify integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Trigger Operator',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contains',
				value: 'contains',
			},
			{
				name: 'Equals',
				value: 'equals',
			},
			{
				name: 'Starts With',
				value: 'startsWith',
			},
			{
				name: 'Ends With',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Choose an option to perform with the Dify integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Trigger',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the word/phrase or regex to be used as trigger to start Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expires In (Minutes)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Enter how many minutes without responses the bot should be disabled',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Finish Keyword',
		name: 'keywordFinish',
		type: 'string',
		default: '#exit',
		required: true,
		description: 'Enter the word/phrase that will be used to close the bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Default Message Delay (In Milliseconds)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Enter how many milliseconds delay the bot will have',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Unknown Message Text',
		name: 'unknownMessage',
		type: 'string',
		default: 'Message not recognized',
		required: true,
		description: 'Enter the text that will be sent when message is not recognized',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Listen to Messages Sent by Me',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to listen to messages sent by the instance owner',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Pause Bot When I Send A Message',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to pause the bot when you send a message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Keep Bot Session Open',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Whether to keep the bot session open',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Wait Time (In Seconds)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'This is the time the bot will wait for the next messages after receiving a message, then it will join all messages into one',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},

	// Change Session Status Dify
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid of the recipient',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['changeStatusDify'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Open',
				value: 'opened',
			},
			{
				name: 'Paused',
				value: 'paused',
			},
			{
				name: 'Closed',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Choose what the session status will be',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['changeStatusDify'],
			},
		},
	},

	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
			},
		},
	},
	{
		displayName: 'What Do You Want to Do',
		name: 'resourceForFlowiseBot',
		type: 'options',
		options: [
			{
				name: 'Add Flowise',
				value: 'createFlowise',
			},
			{
				name: 'Check Flowise',
				value: 'findFlowise',
			},
			{
				name: 'Update Flowise',
				value: 'updateFlowise',
			},
			{
				name: 'Delete Flowise',
				value: 'deleteFlowise',
			},
			{
				name: 'Search Session in Flowise',
				value: 'fetchSessionsFlowise',
			},
			{
				name: 'Change Session Status in Flowise',
				value: 'changeStatusFlowise',
			},
		],
		default: 'createFlowise',
		description: 'Choose an option to perform with the Flowise integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
			},
		},
	},

	// update Flowise
	{
		displayName: 'Flowise ID',
		name: 'flowiseBotId',
		type: 'string',
		default: '',
		description: 'Enter the Flowise ID you want to search for, leave empty to search all',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: [
					'updateFlowise',
					'findFlowise',
					'deleteFlowise',
					'fetchSessionsFlowise',
					'changeStatusFlowise',
				],
			},
		},
	},

	//Se createFlowise ou updateFlowise
	{
		displayName: 'Flowise URL',
		name: 'apiUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter your Flowise URL',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Flowise ApiKey',
		name: 'apiKeyBot',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		description: 'Enter your Flowise bot ApiKey',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Trigger Type',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Keyword',
				value: 'keyword',
			},
			{
				name: 'All',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Choose an option to perform with the Flowise integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Trigger Operator',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contains',
				value: 'contains',
			},
			{
				name: 'Equals',
				value: 'equals',
			},
			{
				name: 'Starts With',
				value: 'startsWith',
			},
			{
				name: 'Ends With',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Choose an option to perform with the Flowise integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Trigger',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description:
			'Enter the word/phrase or regex to be used as trigger to start Flowise',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expires In (Minutes)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Enter how many minutes without responses the bot should be disabled',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Finish Keyword',
		name: 'keywordFinish',
		type: 'string',
		default: '#exit',
		required: true,
		description: 'Enter the word/phrase that will be used to close the bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Default Message Delay (In Milliseconds)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Enter how many milliseconds delay the bot will have',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Unknown Message Text',
		name: 'unknownMessage',
		type: 'string',
		default: 'Message not recognized',
		required: true,
		description: 'Enter the text that will be sent when message is not recognized',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Listen to Messages Sent by Me',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to listen to messages sent by the instance owner',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Pause Bot When I Send A Message',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to pause the bot when you send a message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Keep Bot Session Open',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Whether to keep the bot session open',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Wait Time (In Seconds)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'This is the time the bot will wait for the next messages after receiving a message, then it will join all messages into one',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},

	// Change Session Status Flowise
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid of the recipient',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['changeStatusFlowise'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Open',
				value: 'opened',
			},
			{
				name: 'Paused',
				value: 'paused',
			},
			{
				name: 'Closed',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Choose what the session status will be',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['changeStatusFlowise'],
			},
		},
	},

	{
		displayName: 'Ignored JIDs',
		name: 'ignoreJids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		description: 'List of JIDs that will be ignored by the bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Operator Type',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contains',
				value: 'contains',
			},
			{
				name: 'Equals',
				value: 'equals',
			},
			{
				name: 'Starts With',
				value: 'startsWith',
			},
			{
				name: 'Ends With',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
			{
				name: 'None',
				value: 'none',
			},
		],
		default: 'equals',
		description: 'Choose the operator type for the trigger',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	}
];

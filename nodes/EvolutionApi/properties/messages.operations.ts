import { INodeProperties } from 'n8n-workflow';

// Messages API options
export const messagesOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['messages-api'], // Resource value
		},
	},
	options: [
		// Option = Send text message
		{
			// Send Text
			name: 'Send Text',
			action: 'Send text',
			description: 'Sends text message',
			value: 'send-text',
		},

		// Option = Send Image
		{
			// Send Media
			name: 'Send Image',
			action: 'Send image',
			description: 'Sends image message',
			value: 'send-image',
		},

		// Option = Send Video
		{
			// Send Media
			name: 'Send Video',
			action: 'Send video',
			description: 'Send video message',
			value: 'send-video',
		},

		// Option = Send Audio
		{
			// Send Narrated Audio
			name: 'Send Audio',
			action: 'Send audio',
			description: 'Send audio message',
			value: 'send-audio',
		},

		// Option = Send Document
		{
			// Send Media
			name: 'Send Document',
			action: 'Send document',
			description: 'Send message with Document',
			value: 'send-document',
		},

		// Option = Send Poll
		{
			// Send Poll
			name: 'Send Poll',
			action: 'Send poll',
			description: 'Sends a Poll with up to 12 options',
			value: 'send-poll',
		},

		// Option = Send Contact
		{
			name: 'Send Contact',
			action: 'Send contact',
			description: 'Sends a contact on WhatsApp',
			value: 'send-contact',
		},

		// Option = Send List
		{
			name: 'Send List',
			action: 'Send list',
			description: 'Sends an interactive options list',
			value: 'send-list',
		},

		// Option = Send Buttons
		{
			name: 'Send Buttons',
			action: 'Send buttons',
			description: 'Sends message with interactive buttons',
			value: 'send-buttons',
		},

		// Option = Send PIX
		{
			name: 'Send PIX',
			action: 'Send PIX',
			description: 'Sends PIX payment button',
			value: 'send-pix',
		},

		// Option = Send Status
		{
			name: 'Send Status',
			action: 'Send status',
			description: 'Publish a Status/Stories',
			value: 'send-stories',
		},

		// Option = React to Message
		{
			name: 'React to Message',
			action: 'React to message',
			description: 'Adds a reaction to a message',
			value: 'send-reaction',
		},
	],
	// Setting "Send Text" as default option
	default: 'send-text',
};

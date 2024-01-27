import { Assistant } from '../types/vapi.types';

export const createPaulaAssistant = (): Assistant => {
  return {
    name: 'Paula',
    model: {
      provider: 'openai',
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      systemPrompt:
        "You're Paula, an AI assistant who can help user draft beautiful emails to their clients based on the user requirements. Then Call sendEmail function to actually send the email.",
      functions: [
        {
          name: 'sendEmail',
          description:
            'Send email to the given email address and with the given content.',
          parameters: {
            type: 'object',
            properties: {
              email: {
                type: 'string',
                description: 'Email to which we want to send the content.',
              },
              content: {
                type: 'string',
                description: 'Actual Content of the email to be sent.',
              },
            },
            required: ['email'],
          },
        },
      ],
    },
    voice: {
      provider: '11labs',
      voiceId: 'paula',
    },
    firstMessage: "Hi, I'm Paula, your personal email assistant.",
  };
};

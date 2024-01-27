# Vapiai Express Starter

Welcome to the Vapiai Express Starter project! This project is designed to kickstart your development with the Vapi SDK, a powerful tool for building Voice driven AI applications. For more information on Vapi, visit [Vapi.ai](https://vapi.ai).

## Project Overview

The Vapi Express Starter is a boilerplate setup that provides a foundational structure for your Vapi applications. It allows you to create a webhook which Vapi can use to send various webhook events. You can do implement functions here and they will be triggered via vapi. You can also do postprocessing once the call is complete or store the messages in the conversations.

## Getting Started

### Installation

To set up the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies with `npm install` or `yarn install`.

### Development Server

To start the development server, run the following command:

```bash
# npm
npm run dev
# yarn
yarn dev
# pnpm
pnpm dev
```

Open your browser and navigate to `http://localhost:8000/`. You should see your Vapi application running and ready for development.

## Server URL Setup

To receive and respond to messages from Vapi, you need to set up your server URL in the Vapi account dashboard. The URL you will use is the endpoint where your server listens for webhook events. Based on the current configuration in `src/main.ts` and `src/webhooks/vapi.webhook.ts`, the webhook URL you should set up in your Vapi account dashboard is: `http://<your-server-address>/vapi/webhook`. Replace `<your-server-address>` with the actual address where your server is hosted. This URL will be used by Vapi to send status updates, function calls, and more. For detailed instructions, refer to the [Vapi documentation on setting up your server URL](https://docs.vapi.ai/server_url).

### Handling Webhook Events

Your server will receive `POST` requests with various types of messages, such as function calls, assistant requests, status updates, end-of-call reports, and hang notifications. Ensure your server is configured to handle these requests appropriately. For the expected request bodies and response formats, consult the [Vapi server messages documentation](https://docs.vapi.ai/server_url).

## Building the Project

To build the project for production, run:

```bash
# npm
npm run build
# yarn
yarn build
# pnpm
pnpm build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment.

After setting up your project, you might want to:

- Explore the Vapi Docs and implement different webhook events according to your requirements.
- Set up a database to store and manage your application's data.
- Implement authentication and authorization for secure access to your application.

## Need Help?

If you have any questions or need further information to add to this README, please feel free to ask.

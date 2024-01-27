import { functions } from '../functions';
import {
  AssistantRequestMessageResponse,
  AssistantRequestPayload,
  FunctionCallPayload,
  StatusUpdatePayload,
} from '../types/vapi.types';
import { createPaulaAssistant } from './assistant.service';

/**
 * Here will be all the logic for handling of the webhook events triggered by Vapi.
 */

export const functionCallHandler = async (payload: FunctionCallPayload) => {
  const { functionCall } = payload;

  if (!functionCall) {
    throw new Error('Invalid Request.');
  }

  const { name, parameters } = functionCall;
  if (Object.prototype.hasOwnProperty.call(functions, name)) {
    return await functions[name](parameters);
  } else {
    console.log(`Function ${name} not found`);
    throw new Error(`Function ${name} not found`);
  }
};

export const statusUpdateHandler = async (payload: StatusUpdatePayload) => {
  const { messages } = payload;
  console.log(messages);
  return;
};

export const assistantRequestHandler = async (
  payload?: AssistantRequestPayload
): Promise<AssistantRequestMessageResponse> => {
  const assistant = payload.call ? createPaulaAssistant() : null;
  if (assistant) return { assistant };

  throw new Error(`Invalid call details provided.`);
};

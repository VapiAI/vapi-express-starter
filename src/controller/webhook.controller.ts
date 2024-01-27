import { functions } from '../functions';
import { FunctionCallPayload, StatusUpdatePayload } from '../types/vapi.types';

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
  return '';
};

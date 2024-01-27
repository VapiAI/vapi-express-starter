import { ChatCompletionMessageParam } from 'openai/resources';

const VAPI_CALL_STATUSES = [
  'queued',
  'ringing',
  'in-progress',
  'forwarding',
  'ended',
] as const;
export type VapiCallStatus = (typeof VAPI_CALL_STATUSES)[number];

export interface StatusUpdateMessage {
  type: 'status-update';
  status: VapiCallStatus;
  messages?: ChatCompletionMessageParam[];
}

export interface VapiCall {}

export enum VapiWebhookEnum {
  ASSISTANT_REQUEST = 'assistant-request',
  FUNCTION_CALL = 'function-call',
  STATUS_UPDATE = 'status-update',
  END_OF_CALL_REPORT = 'end-of-call-report',
}

export interface VapiPayload {
  type: VapiWebhookEnum;
  call: VapiCall;
}

export interface VapiResponse {
  result: string;
}

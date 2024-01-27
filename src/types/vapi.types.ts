/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChatCompletionCreateParams,
  ChatCompletionMessageParam,
} from 'openai/resources';

const VAPI_CALL_STATUSES = [
  'queued',
  'ringing',
  'in-progress',
  'forwarding',
  'ended',
] as const;
export type VapiCallStatus = (typeof VAPI_CALL_STATUSES)[number];

export enum VapiWebhookEnum {
  ASSISTANT_REQUEST = 'assistant-request',
  FUNCTION_CALL = 'function-call',
  STATUS_UPDATE = 'status-update',
  END_OF_CALL_REPORT = 'end-of-call-report',
}

interface BaseVapiPayload {
  call: VapiCall;
}

export interface StatusUpdatePayload extends BaseVapiPayload {
  type: VapiWebhookEnum.STATUS_UPDATE;
  status: VapiCallStatus;
  messages?: ChatCompletionMessageParam[];
}

export interface FunctionCallPayload extends BaseVapiPayload {
  type: VapiWebhookEnum.FUNCTION_CALL;
  functionCall: ChatCompletionCreateParams.Function;
}

export interface EndOfCallReportPayload {
  type: 'end-of-call-report';
  endedReason: string;
  transcript: string;
  messages: any[];
  summary: string;
  recordingUrl?: string;
}

export interface VapiCall {}
export type VapiPayload =
  | StatusUpdatePayload
  | FunctionCallPayload
  | EndOfCallReportPayload;

export interface VapiResponse {
  result?: string;
}
